import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';

import RyrEmail from '../components/ryr-email';
import RyrFooter from '../components/ryr-footer';
import RyrHowItWorks from '../components/ryr-how-it-works';
import RyrSectionConnector from '../components/ryr-section-connector';

const RyrLocationSelector = dynamic(() => import('../components/ryr-location-selector'), {
  ssr: false
});

class Index extends React.Component {
  static getInitialProps() {
    console.log('=> Mapbox Token: ' + process.env.RYR_WEB_MAPBOX_API_KEY);

    // you can pass some custom props to component from here
    return { custom: 'custom', mapboxToken: process.env.RYR_WEB_MAPBOX_API_KEY };
  }

  render() {
    return (
      <div>
        <Head>
          <title>Request Yo Racks</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="RYR landing page" />
          <meta name="theme-color" content="#B35C22" />
          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <nav>
          <img src="/static/images/logos/ryr_logo-64x64.png" alt="RYR logo" />
          <h1>Request Yo Racks</h1>
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
          <RyrLocationSelector mapboxToken={this.props.mapboxToken} />
          <RyrSectionConnector fill="#2E5D2A" bg="#5AAD54" />
        </section>
        <section style={{ backgroundColor: '#5AAD54' }}>
          {/* <div style={{ height: '150px' }} /> */}
          <RyrEmail />
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
            h1 {
              color: #b35c22;
              display: inline-block;
              margin-left: 0.5em;
            }

            nav {
              padding: 0.75em;
            }

            nav > * {
              vertical-align: middle;
            }

            section {
              width: 80%;
              margin: 0 auto;
              padding-top: 2em;
              padding-bottom: 2em;
            }

            footer {
              border-top: solid black 1px;
            }
          `}
        </style>
      </div>
    );
  }
}

Index.propTypes = {
  mapboxToken: PropTypes.string
};

export default connect()(Index);
