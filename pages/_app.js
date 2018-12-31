import App, { Container } from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';

import ServiceWorker from '../components/service-worker';
import { initializeStore } from '../redux/store';

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // We can dispatch from here too.
    // ctx.store.dispatch({ type: 'FOO', payload: 'foo' });

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <ServiceWorker />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initializeStore)(CustomApp);
