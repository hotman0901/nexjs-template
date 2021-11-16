import PropTypes from 'prop-types';
import { useTranslations } from 'next-intl';

const Error = function ({ statusCode }) {
  const t = useTranslations('Index');

  return (
    <div>
      <h1>{t('title')}</h1>
      <div>error status-{statusCode}</div>
    </div>
  );
};

// Error.getInitialProps = async ({ res, err, locale }) => {
//   const { statusCode } = res;
//   console.log('locale:', locale);
//   const msg = await import(`@i18n/index/${locale}.json`);
//   return {
//     statusCode: res ? statusCode : err ? err.statusCode : null,
//     messages: msg.default,
//   };
// };

export async function getInitialProps({ res, err, locale }) {
  const { statusCode } = res;
  const msg = await import(`@i18n/index/${locale}.json`);
  return {
    statusCode: res ? statusCode : err ? err.statusCode : null,
    messages: msg.default,
  };
}

Error.defaultProps = {
  statusCode: '',
};

Error.propTypes = {
  statusCode: PropTypes.any,
};

export default Error;
