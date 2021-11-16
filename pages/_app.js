import { NextIntlProvider } from 'next-intl';
import PropTypes from 'prop-types';
import Layout from '@components/Layout/Layout';
import Head from 'next/head';
import { wrapper } from '@redux/configureStore';
import 'react-vant/lib/index.css';
import '@vant/touch-emulator';
import { getBaseCDN } from '@utils/file';
import Script from 'next/script';
// 之後如果有統一色彩可以重這邊替換
import '@static/css/resetVant.css';

const App = function ({ Component, pageProps }) {
  return (
    <NextIntlProvider
      // To achieve consistent date, time and number formatting
      // across the app, you can define a set of global formats.
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          },
        },
      }}
      messages={pageProps.messages}
      // Providing an explicit value for `now` ensures consistent formatting of
      // relative values regardless of the server or client environment.
      now={new Date(pageProps.now)}
      // Also an explicit time zone is helpful to ensure dates render the
      // same way on the client as on the server, which might be located
      // in a different time zone.
      // timeZone="Austria/Vienna"
    >
      <Layout>
        <>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1, viewport-fit=cover,user-scalable=no"
            />
            <meta name="format-detection" content="telephone=no" />
            <meta httpEquiv="X-UA-Compatiable" content="IE-Edge" />
            <meta name="google" content="notranslate" />
            <meta httpEquiv="x-dns-prefetch-control" content="on" />
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="default"
            />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="mobile-web-app-capable" content="yes" />
          </Head>
          <Script src={`${getBaseCDN()}/static/js/fastclick.js`} />

          {/* mobile debug 用 */}
          {process.env.MY_NODE_ENV !== 'production' && (
            <Script src={`${getBaseCDN()}/static/js/eruda.worker.js`} />
          )}
          {/* mobile debug 用 */}
          {/* 因為是載入第三方套件，等載入成功再 onload function 初始化 */}
          {process.env.MY_NODE_ENV !== 'production' && (
            <Script
              src="https://cdn.bootcdn.net/ajax/libs/eruda/2.4.1/eruda.min.js"
              onload="init()"
            />
          )}
          <Component {...pageProps} useSuspense={false} />
        </>
      </Layout>
    </NextIntlProvider>
  );
};

App.defaultProps = {
  pageProps: {},
  Component: {},
};

App.propTypes = {
  pageProps: PropTypes.any,
  Component: PropTypes.any,
};

export default wrapper.withRedux(App);
