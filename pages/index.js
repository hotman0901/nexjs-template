import { useEffect, useState } from 'react';
import { Tabbar, NavBar, Toast, Button, ConfigProvider } from 'react-vant';
import { useDispatch } from 'react-redux';
import { stopFetchingUsers, startFetchingUsers } from '@redux/actions/game';
import User from '@components/User/User';
import { WGBall } from '@widgets/ball';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import MobileLayout from '@components/Layout/MobileLayout';
import Router, { useRouter } from 'next/router';
import styled from 'styled-components';

// vant 可以用 styled-component 包一層
const BennyButton = styled(Button)`
  /* 可以修改 vant root 的色碼 */
  /* --rv-button-default-background-color: blue; */
  /* 或是需要直接 important 直接壓過 */
  /* background: red !important; */
`;

const Index = function () {
  const router = useRouter();
  const { locale } = router;
  const t = useTranslations('Index');
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {};
  }, []);

  useEffect(() => {
    dispatch(startFetchingUsers());
    return () => {
      dispatch(stopFetchingUsers());
    };
  }, []);

  const goPage = () => {
    Router.push({
      pathname: '/games',
    });
  };

  const header = () => (
    // vant 可以用 ConfigProvider 修改色碼，壞處太多層 div
    <ConfigProvider themeVars={{ navBarIconColor: 'red' }}>
      <NavBar
        title="首頁"
        leftArrow
        rightText="按钮"
        onClickLeft={() => Router.back()}
        onClickRight={() => Toast.info('按钮')}
      />
    </ConfigProvider>
  );

  const content = () => (
    <div style={{ height: '2000px', position: 'relative' }}>
      <BennyButton onClick={goPage}>Games Page</BennyButton>
      <div>
        language: {locale}
        <WGBall />
        <User />
        <h4>change page - {process.env.MY_NODE_ENV}</h4>
        <Link href="/games" locale="tw" replace>
          <a>To games</a>
        </Link>
        <br />
        <h1>{t('title')}</h1>
        <br />
      </div>
    </div>
  );
  const footer = () => (
    <Tabbar onChange={v => Toast.info(`标签${+v + 1}`)} fixed={false}>
      <Tabbar.Item icon="home-o">标签</Tabbar.Item>
      <Tabbar.Item icon="search">标签</Tabbar.Item>
      <Tabbar.Item icon="friends-o">标签</Tabbar.Item>
      <Tabbar.Item icon="setting-o">标签</Tabbar.Item>
    </Tabbar>
  );

  return (
    <MobileLayout
      header={header()}
      content={content()}
      footer={footer()}
      loading={loading}
    />
  );
};

// i18n 要放在page 裡面，若放在 container 會失效
Index.getInitialProps = async ({ locale }) => ({
  locale,
  messages: {
    ...require(`@i18n/shared/${locale}.json`),
    ...require(`@i18n/index/${locale}.json`),
  },
});

export default Index;
