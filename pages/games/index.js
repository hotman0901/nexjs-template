import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { NavBar, Toast } from 'react-vant';
import Router from 'next/router';

const Games = function () {
  const t = useTranslations('Index');

  return (
    <div>
      <NavBar
        title="games"
        leftArrow
        rightText="按钮"
        onClickLeft={() => Router.back()}
        onClickRight={() => Toast.info('按钮')}
      />
      <h1>ＧＡＭＥＳ-{process.env.MY_NODE_ENV}</h1>
      <br />
      <p>change language</p>
      <br />
      <h1>{t('title')}</h1>
      {/* 需要加上 locale 參數判斷 */}
      <Link href="/games" locale="en">
        <a>To /en/index</a>
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link href="/games" locale="de">
        <a>To /de/index</a>
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link href="/games" locale="tw">
        <a>To /tw/index</a>
      </Link>
    </div>
  );
};

Games.getInitialProps = async ({ locale }) => ({
  messages: {
    ...require(`@i18n/shared/${locale}.json`),
    ...require(`@i18n/index/${locale}.json`),
  },
});

export default Games;
