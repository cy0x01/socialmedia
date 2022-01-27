import React from 'react';
import Head from 'next/head'

function GlobalLayout({children}) {
  return(
      <div className=''>
        <Head>
          <title>Social Media App</title>
          <meta name="description" content="A Simple Social Media Web App Created by CySurigao" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
      </div>
  )
}

export default GlobalLayout;
