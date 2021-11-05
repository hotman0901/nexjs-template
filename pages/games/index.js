import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { stopFetchingUsers, startFetchingUsers } from '@redux/actions/game';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { NavBar, Toast } from 'react-vant';
import Router from 'next/router';

// import axios from 'axios';

const Games = () => {
  // console.log('2', process.env.MY_NODE_ENV);
  const t = useTranslations('Index');
  // const dispatch = useDispatch();

  useEffect(
    () =>
      // dispatch(startFetchingUsers());

      // axios.get(`/api/proxy/users/1`).then(res => {
      //   console.log('@@res:', res);
      // });
      () => {
        // dispatch(stopFetchingUsers());
      },
    []
  );

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

// i18n 要放在page 裡面，若放在 container 會失效
// export function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: {
//         ...require(`@messages/shared/${locale}.json`),
//         ...require(`@messages/index/${locale}.json`),
//       },
//     },
//   };
// }

Games.getInitialProps = async ({ locale }) => ({
  messages: {
    ...require(`@i18n/shared/${locale}.json`),
    ...require(`@i18n/index/${locale}.json`),
  },
});

export default Games;
