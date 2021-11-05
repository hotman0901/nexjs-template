/**
 * @description 靜態檔路徑，如果在 production 模式要改吃 cdn url
 * @returns string
 */
export const getBaseCDN = () => {
  const url = process.env.CDN_URL || '';
  return url ? `${url}/cdn/public` : '';
};
