// import React from 'react';
// import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTranslations } from 'next-intl';

const Error = ({ statusCode }) => {
  const t = useTranslations('Index');

  return (
    <div>
      <h1>{t('title')}</h1>
      <div>error status-{statusCode}</div>
    </div>
  );
};

Error.getInitialProps = async ({ res, err, locale }) => {
  const { statusCode } = res;
  return {
    statusCode: res ? statusCode : err ? err.statusCode : null,
    messages: {
      ...require(`@i18n/shared/${locale}.json`),
      ...require(`@i18n/index/${locale}.json`),
    },
  };
};
Error.defaultProps = {
  statusCode: '',
};

Error.propTypes = {
  statusCode: PropTypes.any,
};

export default Error;
