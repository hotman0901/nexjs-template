/* eslint-disable no-console */
import { publicRuntimeConfig } from './runtimeConfig';

/**
 * @description 靜態檔路徑，如果在 production 模式要改吃 cdn url
 * @returns string
 */
export const getBaseCDN = () => {
  const { CDN_URL } = publicRuntimeConfig;
  return CDN_URL ? `${CDN_URL}/cdn/public` : '';
};
