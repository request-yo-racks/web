import Head from 'next/head';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const footerIconSize = '3x';
const footerIconStyle = { margin: '0 0.3em' };

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
    <div style={{ borderTop: 'solid black 1px', textAlign: 'center', paddingTop: '0.50em' }}>
      <FontAwesomeIcon icon={faFacebook} size={footerIconSize} style={footerIconStyle} />
      <FontAwesomeIcon icon={faTwitter} size={footerIconSize} style={footerIconStyle} />
      <FontAwesomeIcon icon={faGithub} size={footerIconSize} style={footerIconStyle} />
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

        .;
      `}
    </style>
  </div>
);

export default Index;
