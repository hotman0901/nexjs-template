import { useTranslations } from 'next-intl';

const Custom404 = function () {
  const t = useTranslations('Index');
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <h2>{t('title')}</h2>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  const msg = await import(`@i18n/index/${locale}.json`);
  return {
    props: {
      // You can get the messages from anywhere you like, but the recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: msg.default,
    },
  };
}

export default Custom404;
