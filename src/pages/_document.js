import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <title>Vidasoftware</title> */}
          <link rel="icon" href="/favicon.ico" />
          <script src="https://kit.fontawesome.com/69e7262111.js" crossOrigin="anonymous" />
        </Head>
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument