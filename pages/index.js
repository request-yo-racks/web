import Head from 'next/head';
import React from 'react';

import RyrFooter from '../components/ryr-footer';
import RyrHowItWorks from '../components/ryr-how-it-works';

const Index = () => (
  <div>
    <Head>
      <title>Request Yo Racks</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="RYR landing page" />
      <meta name="theme-color" content="#B35C22" />
      <link rel="manifest" href="/static/manifest.json" />
    </Head>
    <div className="navbar">
      <img src="/static/images/logos/ryr_logo-64x64.png" alt="RYR logo" />
      <h1>Request Yo Racks</h1>
    </div>
    <RyrHowItWorks />
    <RyrFooter />
    <style jsx>
      {`
        h1 {
          color: #b35c22;
          display: inline-block;
          margin-left: 0.5em;
        }

        .navbar {
          padding: 0.75em;
        }

        .navbar > * {
          vertical-align: middle;
        }

        .;
      `}
    </style>
  </div>
);

export default Index;
