/* eslint-disable no-console */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { getBaseCDN } from '@utils/file';
import { publicRuntimeConfig } from '@utils/runtimeConfig';

export default class WrapperDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styleTags: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        version: require('../package.json').version,
        env: publicRuntimeConfig,
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { version, env } = this.props;

    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={`${getBaseCDN()}/static/img/favicon/favicon.png`}
          />
          {this.props.styleTags}

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
            rel="stylesheet"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: ` var version='${version}';var env='${JSON.stringify(
                env
              )}';`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
