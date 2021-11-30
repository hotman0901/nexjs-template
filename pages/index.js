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
import { WGScroll } from '@widgets/div';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const Ani = styled(motion.div)`
  object-fit: cover;
  background-size: cover;
  border: 1px solid red;
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  height: 300px;
  width: 100vw;
  position: relative;
`;

// vant 可以用 styled-component 包一層
const BennyButton = styled(Button)`
  /* 可以修改 vant root 的色碼 */
  /* --rv-button-default-background-color: blue; */
  /* 或是需要直接 important 直接壓過 */
  /* background: red !important; */
`;

const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
];

const Index = function () {
  const router = useRouter();
  const { locale } = router;
  const t = useTranslations('Index');
  const dispatch = useDispatch();

  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  const [loading, setLoading] = useState(false);

  const swipeConfidenceThreshold = 10000;
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = newDirection => setPage([page + newDirection, newDirection]);

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

  // css 屬性要用絕對定位
  const variants = {
    init: d => ({
      x: d > 0 ? 1000 : -1000,
      y: 0,
      opacity: 0,
    }),
    enter: {
      zIndex: 1,
      x: 0,
      y: 0,
      opacity: 1,
    },
    exit: d => ({
      zIndex: 0,
      x: d < 0 ? 1000 : -1000,
      y: 0,
      opacity: 0,
    }),
  };

  const content = () => (
    <WGScroll
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="container"
    >
      <Container>
        <AnimatePresence initial={false} custom={direction}>
          <Ani
            variants={variants}
            initial="init"
            animate="enter"
            exit="exit"
            key={page}
            custom={direction}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            style={{ backgroundImage: `url(${images[imageIndex]})` }}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </Container>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div onClick={() => paginate(1)}>prev</div>
        <div onClick={() => paginate(-1)}>next</div>
      </div>

      <motion.div drag="x">123123</motion.div>

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
    </WGScroll>
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
