import React from 'react';
import App, { Container } from 'next/app';

import ServiceWorker from '../components/ServiceWorker';

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ServiceWorker />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default CustomApp;
