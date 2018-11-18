import Head from 'next/head';
import React from 'react';

import RyrFooter from '../components/ryr-footer';
import RyrHeader from '../components/ryr-header';
import RyrHowItWorks from '../components/ryr-how-it-works';
import RyrSectionConnector from '../components/ryr-section-connector';

const Index = () => (
  <div>
    <Head>
      <title>Request Yo Racks</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="RYR landing page" />
      <meta name="theme-color" content="#B35C22" />
      <link rel="manifest" href="/static/manifest.json" />
    </Head>
    <nav>
      <RyrHeader />
    </nav>
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        height: '300px',
        backgroundImage: "url('/static/images/bike-rack-dark.png')",
        backgroundPosition: '0 -150px',
        backgroundRepeat: 'no-repeat',
        color: 'white'
      }}
    >
      <h2>Request a bike rack from the city of Austin</h2>
      <p>Always park your bike securely</p>
    </section>
    <section>
      <RyrHowItWorks />
      <RyrSectionConnector fill="white" bg="#2E5D2A" />
    </section>
    <section style={{ backgroundColor: '#2E5D2A' }}>
      <div style={{ height: '150px' }} />
      <RyrSectionConnector fill="#2E5D2A" bg="#5AAD54" />
    </section>
    <section style={{ backgroundColor: '#5AAD54' }}>
      <div style={{ height: '150px' }} />
      <RyrSectionConnector fill="#5AAD54" bg="#DDFDDF" />
    </section>
    <section style={{ backgroundColor: '#DDFDDF' }}>
      <div style={{ height: '150px' }} />
    </section>
    <footer>
      <RyrFooter />
    </footer>
    <style jsx>
      {`
        nav {
          padding: 0.75em;
        }

        
        section {
          width: 80%;
          margin: 0 auto;
          padding-top: 1.5em;
        }

        footer {
          border-top: solid black 1px;
        }
      `}
    </style>
  </div>
);

export default Index;
