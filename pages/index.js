import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
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
    // Define the colors.
    const darkGreen = '#2E5D2A';
    const mediumGreen = '#5AAD54';
    const lightGreen = '#DDFDDF';

    // Define the styled components.
    const Nav = styled.nav({
      padding: '0.75em',
      '&>*': {
        verticalAlign: 'middle'
      }
    });
    const H1 = styled.h1({
      color: '#b35c22',
      display: 'inline-block',
      marginLeft: '0.5em'
    });
    const Section = styled.section(
      {
        width: '80%',
        margin: '0 auto',
        paddingTop: '2em',
        paddingBottom: '2em'
      },
      props => ({ backgroundColor: props.backgroundColor })
    );
    // TODO(remyg): This `ArrowSection` component does not work, but I believe that's the way it should be.
    // const ArrowSection = styled.section(
    //   {
    //     width: '80%',
    //     margin: '0 auto',
    //     paddingTop: '2em',
    //     paddingBottom: '2em',
    //     '&::after,::before': {
    //       top: '100%',
    //       left: '50%',
    //       border: 'solid transparent',
    //       content: ' ',
    //       height: 0,
    //       width: 0,
    //       position: 'absolute',
    //       pointerEvents: 'none'
    //     },
    //     '&::after': {
    //       borderColor: 'rgba(136, 183, 213, 0)',
    //       borderTopColor: '#88b7d5',
    //       borderWidth: '30px',
    //       marginLeft: '-30px'
    //     },
    //     '&::before': {
    //       borderColor: 'rgba(194, 225, 245, 0)',
    //       borderTopColor: '#c2e1f5',
    //       borderWidth: '36px',
    //       marginLeft: '-36px'
    //     }
    //   },
    //   props => ({ backgroundColor: props.backgroundColor })
    // );
    const Footer = styled.footer({
      borderTop: 'solid black 1px'
    });

    // Render it.
    return (
      <div>
        <Head>
          <title>Request Yo Racks</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="RYR landing page" />
          <meta name="theme-color" content="#B35C22" />
          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <Nav>
          <img src="/static/images/logos/ryr_logo-64x64.png" alt="RYR logo" />
          <H1>Request Yo Racks</H1>
        </Nav>
        <Section
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
        </Section>
        <Section>
          <RyrHowItWorks />
          <RyrSectionConnector fill="white" bg={darkGreen} />
        </Section>
        <Section backgroundColor={darkGreen}>
          <RyrLocationSelector mapboxToken={this.props.mapboxToken} />
          <RyrSectionConnector fill={darkGreen} bg={mediumGreen} />
        </Section>
        <Section backgroundColor={mediumGreen}>
          <RyrEmail />
          <RyrSectionConnector fill={mediumGreen} bg={lightGreen} />
        </Section>
        <Section backgroundColor={lightGreen}>
          <div style={{ height: '150px' }} />
        </Section>
        <Footer>
          <RyrFooter />
        </Footer>
      </div>
    );
  }
}

Index.propTypes = {
  mapboxToken: PropTypes.string
};

export default connect()(Index);
