import getConfig from 'next/config';

const {
  publicRuntimeConfig: clientConfig = {},
  serverRuntimeConfig: serverConfig = {},
} = getConfig();

// nextjs 有分 client Side、server side
// Here, publicRuntimeConfig contains appId, host, restApiKey
export const publicRuntimeConfig = clientConfig;
export const serverRuntimeConfig = serverConfig;
