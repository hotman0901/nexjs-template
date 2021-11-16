import { useEffect, useState, useMemo } from 'react';
import {
  Tabs,
  Tabbar,
  Toast,
  Button,
  ConfigProvider,
  DropdownMenu,
} from 'react-vant';
import { useDispatch } from 'react-redux';
import { stopFetchingUsers, startFetchingUsers } from '@redux/actions/game';
import MobileLayout from '@components/Layout/MobileLayout';
import styled from 'styled-components';
import { WGHeader, WGFooter, WGDropMenuText, WGScroll } from '@widgets/div';

const option1 = [
  { text: '截止時間', value: 0 },
  { text: '下單時間', value: 1 },
];

const SCItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  align-items: center;
  background-color: #b7b7b7;
  margin: 10px 0;
`;

const SCItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
`;

const Index = function () {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {};
  }, []);

  useEffect(() => {
    dispatch(startFetchingUsers());
    return () => {
      dispatch(stopFetchingUsers());
    };
  }, []);

  const [value, setValue] = useState({ value1: 0 });
  const header = useMemo(
    () => (
      <WGHeader style={{ justifyContent: 'space-between' }}>
        <ConfigProvider themeVars={{ dropdownMenuBoxShadow: 'none' }}>
          <DropdownMenu value={value} onChange={setValue} defaultValue={0}>
            <DropdownMenu.Item name="value1" options={option1} />
          </DropdownMenu>
        </ConfigProvider>
        <WGDropMenuText>全部彩種</WGDropMenuText>
      </WGHeader>
    ),
    [value]
  );

  const li = useMemo(
    () =>
      new Array(10).fill(0).map((i, index) => (
        <SCItems key={index}>
          <SCItem style={{ fontSize: '14px', flex: 1 }}>
            <div>北京单场勝平負</div>
            <div>单关, 1注10.00元</div>
          </SCItem>
          <SCItem style={{ marginRight: '10px', fontSize: '10px' }}>
            <div style={{ color: '#8d8d8d' }}>截止: 1天23:59:59</div>
            <div style={{ color: 'red' }}>预计奖金: 19~19元</div>
          </SCItem>
          <SCItem>
            <Button type="primary">接单</Button>
          </SCItem>
        </SCItems>
      )),
    []
  );

  const content = useMemo(
    () => (
      <WGScroll
        style={{ position: 'relative' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key="container"
      >
        <Tabs active="active" animated>
          <Tabs.TabPane title="订单">{li}</Tabs.TabPane>
          <Tabs.TabPane title="合买(2)">{li}</Tabs.TabPane>
          <Tabs.TabPane title="待出票(3)">{li}</Tabs.TabPane>
        </Tabs>
      </WGScroll>
    ),
    []
  );
  const footer = useMemo(
    () => (
      <WGFooter>
        <Tabbar onChange={v => Toast.info(`标签${+v + 1}`)} fixed={false}>
          <Tabbar.Item icon="home-o">订单管理</Tabbar.Item>
          <Tabbar.Item icon="search">用户管理</Tabbar.Item>
          <Tabbar.Item icon="friends-o">数据统计</Tabbar.Item>
          <Tabbar.Item icon="setting-o">个人中心</Tabbar.Item>
        </Tabbar>
      </WGFooter>
    ),
    []
  );

  return (
    <MobileLayout
      header={header}
      content={content}
      footer={footer}
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
