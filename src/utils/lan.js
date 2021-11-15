import Router from 'next/router';

export const changeLang = (asPath, locale, type = 'replace') => {
  if (type === 'replace') {
    Router.replace(asPath, asPath, { locale });
  } else {
    Router.push(asPath, asPath, { locale });
  }
};
