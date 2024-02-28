// _document.tsx

// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import React from 'react';
import { metadata } from '@/src/app/layout';
import { roboto } from '@/src/app/ui/fonts';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Meta tags */}
          <meta name="description" content={metadata.description} />
          {/* Title */}
          <title>{metadata.title}</title>
          {/* Global styles */}
          <link rel="stylesheet" href="./ui/global.css" />
        </Head>
        <body className={`${roboto.className} antialiased`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
