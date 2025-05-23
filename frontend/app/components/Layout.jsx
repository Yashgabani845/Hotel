import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Luxury Hotel & Resort | Experience Unparalleled Comfort</title>
        <meta name="description" content="Experience luxury like never before at our premium hotel & resort. Enjoy world-class amenities, stunning views, and exceptional service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout