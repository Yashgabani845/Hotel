require('dotenv').config();
const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { BedrockRuntimeClient, InvokeModelCommand } = require('@aws-sdk/client-bedrock-runtime');
const { Pinecone } = require('@pinecone-database/pinecone');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors({
  origin: 'https://hotel-nu-red.vercel.app',
  methods: ['GET', 'POST'],
  credentials: true
}))
const bedrockClient = new BedrockRuntimeClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pinecone.Index(process.env.PINECONE_INDEX_NAME);

async function getTitanEmbedding(text) {
  const input = { inputText: text };
  const command = new InvokeModelCommand({
    modelId: 'amazon.titan-embed-text-v2:0',
    contentType: 'application/json',
    accept: 'application/json',
    body: Buffer.from(JSON.stringify(input)),
  });

  const response = await bedrockClient.send(command);
  const result = JSON.parse(Buffer.from(response.body).toString('utf8'));
  return result.embedding;
}

async function loadAndUploadDocuments() {
  try {
    const rawData = fs.readFileSync('./data.json', 'utf8');
    const documents = JSON.parse(rawData);
    const failedVectors = [];

    for (const doc of documents) {
      const text = doc.content || doc.text || '';
      if (!text) continue;

      try {
        const embedding = await getTitanEmbedding(text);
        const vector = {
          id: uuidv4(),
          values: embedding,
          metadata: {
            title: doc.title || '',
            content: text,
          },
        };

        await index.upsert([vector]);
        console.log(` Uploaded: ${vector.id}`);
      } catch (uploadError) {
        console.error(' Upsert failed. Backing up vector locally.');
        failedVectors.push({
          title: doc.title || '',
          content: text,
        });
      }
    }

    if (failedVectors.length > 0) {
      fs.writeFileSync('./vectors.json', JSON.stringify(failedVectors, null, 2));
      console.log(`${failedVectors.length} vectors saved to failed_vectors.json`);
    }

    console.log('Upload process finished!');
  } catch (error) {
    console.error('Error loading/uploading documents:', error);
  }
}

app.get('/upload', async (req, res) => {
  await loadAndUploadDocuments();
  res.send('Documents processed. Check console and failed_vectors.json if needed.');
});
app.post('/query', async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: 'Missing question' });

  try {
    const queryEmbedding = await getTitanEmbedding(question);

    const queryresponse = await index.query({
      vector: queryEmbedding,
      topK: 3,
      includeMetadata: true,
    });

    const topResults = queryresponse.matches || [];
    const context = topResults.map(match => match.metadata.content).join('\n');
    const systemPrompt = `
You are a helpful and confident assistant. Answer all questions directly and factually using only the provided information.
STRICTLY DO NOT USE phrases like "context", "based on", "according to", or anything similar.
Respond with clear and concise answers as if the information is your own knowledge.
Do not explain, justify, or repeat any part of the question or source.
`.trim();

const messages = [
  {
    role: "user",
    content: [
      {
        type: "text",
        text: `Context:\n${context}\n\nQuestion:\n${question}`
      }
    ],
  }
];

   

    const response = await bedrockClient.send(new InvokeModelCommand({
      modelId: "anthropic.claude-3-haiku-20240307-v1:0",
      contentType: "application/json",
      accept: "application/json",
    
      body: Buffer.from(JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        system:systemPrompt,
        messages: messages,
        max_tokens: 80, 
        temperature: 0.5, 
        top_p: 0.9
      }))
    }));

    const modelOutput = JSON.parse(Buffer.from(response.body).toString('utf8'));
    const answer = modelOutput?.content?.[0]?.text?.trim() || "No response generated.";
    res.send({ answer });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
