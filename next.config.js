/* eslint-disable import/no-extraneous-dependencies */
// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['react-vant']);

// 開發模式 yarn dev 不會帶入 env
const env = {
  MY_NODE_ENV: process.env.MY_NODE_ENV ? process.env.MY_NODE_ENV : 'stage',
  CDN_URL: process.env.CDN_URL ? process.env.CDN_URL : '',
  API_URL: process.env.API_URL ? process.env.API_URL : '',
  DEPLOY_TYPE: process.env.DEPLOY_TYPE ? process.env.DEPLOY_TYPE : 'stage',
};

const nextConfiguration = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    // locales: ['en', 'de', 'tw'],
    locales: ['ch'],
    defaultLocale: 'ch',
    localeDetection: false,
  },
  compress: true,
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      child_process: false,
      net: false,
      crypto: false,
    };

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
  // distDir: 'build',
  // assetPrefix for cdn 用
  assetPrefix: process.env.CDN_URL ? `${process.env.CDN_URL}/cdn` : '',
  // 要使用客製化  router 要改成 false
  // useFileSystemPublicRoutes: false,
  // 與 pm2 結合這邊需要補上否則 client side 吃不到
  // env: {
  //   CDN_URL: process.env.CDN_URL ? process.env.CDN_URL : '',
  //   API_URL: process.env.API_URL ? process.env.API_URL : '',
  //   WEBSITE: process.env.WEBSITE ? process.env.WEBSITE : '',
  // },
  env,
  // nextjs env 有分 clinet 與 server runtime
  // 在這將client side 的另外存，但有安全疑慮
  // publicRuntimeConfig: {
  //   ...env,
  //   NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  // },
  // 只有 server side
  // serverRuntimeConfig: {
  // ...env,
  // }
};

module.exports = withPlugins(
  [
    [
      withAntdLess,
      {
        /**
         * @see https://github.com/SolidZORO/next-plugin-antd-less
         */
        modifyVars: {
          // 全部样式变量 https://github.com/3lang3/react-vant/blob/main/src/styles/themes/default.less
          '@brand-color': '#ef5350',
        },
      },
    ],
    withImages,
    withTM,
  ],
  nextConfiguration
);
