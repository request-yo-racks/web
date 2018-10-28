import Head from 'next/head';
import React from 'react';

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
      <img className="logo" src="/static/images/logos/ryr_logo-64x64.png" alt="RYR logo" />
      <h1>Request Yo Racks</h1>
    </div>
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

        .cover {
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          height: calc(100vh - 64px);
          padding: 0 16px;
          background-image: url('/static/images/bike-rack-dark.png');
          backgrond-repeat: no-repeat;
          background-size: cover;
          color: white;
          text-align: center;
        }

        .cover > h2 {
          font-size: 3.5em;
        }

        .cover > p {
          font-size: 2em;
        }

        #about .info {
          width: 66%;
          margin: 2em auto;
          display: flex;
          justify-content: center;
          flex-direction: row;
          align-items: center;
        }

        #about .info .logo {
          width: 33%;
          margin-right: 1em;
        }

        #about .info .logo img {
          width: 100%;
          max-width: 256px;
          display: flex;
          margin: 0 auto;
        }

        #about .info .how-it-works {
          width: 67%;
        }

        #about .info .how-it-works img {
          width: 100%;
          max-width: 960px;
        }

        @media (max-width: 600px) {
          .cover > h2 {
            font-size: 2.5em;
          }
          .cover > p {
            font-size: 1em;
          }

          #about .info {
            flex-direction: column;
          }

          #about .info .how-it-works {
            order: 1;
            margin-bottom: 1em;
            width: 100%;
          }

          #about .info .logo {
            order: 2;
            margin-right: 0;
          }
        }
      `}
    </style>
  </div>
);

export default Index;
