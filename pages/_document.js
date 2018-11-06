import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style>
            {`
            * {
              margin: 0;
              padding: 0;
            }
            html, body {
              width: 100%;
              min-height: 100%;
              font-family: Verdana, Geneva, sans-serif;
            }
          `}
          </style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
