/* eslint-disable no-unused-vars */
import { useEffect, useState, useMemo, useCallback } from 'react';
import {
  Tabs,
  Tabbar,
  Toast,
  Button,
  ConfigProvider,
  DropdownMenu,
} from 'react-vant';
import { useDispatch } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { stopFetchingUsers, startFetchingUsers } from '@redux/actions/game';
import MobileLayout from '@components/Layout/MobileLayout';
import styled from 'styled-components';
import { WGHeader, WGFooter, WGDropMenuText, WGScroll } from '@widgets/div';
import { WGVantTabs } from '@widgets/tab';
import { Virtuoso } from 'react-virtuoso';

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

  const [fakeData, setData] = useState(
    Array.from({ length: 1000 }).map((o, index) => index)
  );

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

  const renderList = () => (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          width={width}
          itemCount={fakeData.length}
          itemSize={80}
          itemData={fakeData}
        >
          {({ data, index, style }) => (
            <div key={index} style={style}>
              <SCItems>
                <SCItem style={{ fontSize: '14px', flex: 1 }}>
                  <div>北京单场勝平負</div>
                  <div>单关, 1注10.00元</div>
                </SCItem>
                <SCItem style={{ marginRight: '10px', fontSize: '10px' }}>
                  <div style={{ color: '#8d8d8d' }}>截止: 1天23:59:59</div>
                  <div style={{ color: 'red' }}>预计奖金: 19~19元</div>
                </SCItem>
                <SCItem>
                  <Button type="primary">接单 {data[index]}</Button>
                </SCItem>
              </SCItems>
            </div>
          )}
        </List>
      )}
    </AutoSizer>
  );

  const [users, setUsers] = useState(() => [
    { name: 1, longText: 'lffffff' },
    { name: 2, longText: 'lffffff' },
    { name: 3, longText: 'lffffff' },
    { name: 4, longText: 'lffffff' },
    { name: 5, longText: 'lffffff' },
    { name: 6, longText: 'lffffff' },
    { name: 7, longText: 'lffffff' },
    { name: 8, longText: 'lffffff' },
    { name: 9, longText: 'lffffff' },
    { name: 10, longText: 'lffffff' },
    { name: 11, longText: 'lffffff' },
    { name: 12, longText: 'lffffff' },
    { name: 13, longText: 'lffffff' },
    { name: 14, longText: 'lffffff' },
    { name: 15, longText: 'lffffff' },
    // { name: 16, longText: 'lffffff' },
    // { name: 17, longText: 'lffffff' },
    // { name: 18, longText: 'lffffff' },
    // { name: 19, longText: 'lffffff' },
    // { name: 20, longText: 'lffffff' },
    // { name: 21, longText: 'lffffff' },
    // { name: 22, longText: 'lffffff' },
    // { name: 23, longText: 'lffffff' },
    // { name: 24, longText: 'lffffff' },
  ]);
  const [isScrolling, setIsScrolling] = useState(false);

  const template = (index, user) => (
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
  );

  const moreLoading = () => (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      Loading...
    </div>
  );

  const content = () => (
    <WGScroll
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="container"
      scroll="disable"
    >
      <WGVantTabs active="active" animated>
        <Tabs.TabPane title="订单">
          <Virtuoso
            // endReached={loadMore}
            data={users}
            isScrolling={setIsScrolling}
            itemContent={template}
            components={
              {
                // Footer: moreLoading,
              }
            }
          />
        </Tabs.TabPane>
        {/* <Tabs.TabPane title="合买(2)">
          <Virtuoso
            endReached={loadMore}
            data={users}
            isScrolling={setIsScrolling}
            itemContent={template}
            components={{
              Footer: moreLoading,
            }}
          />
        </Tabs.TabPane>
        <Tabs.TabPane title="待出票(3)">
          <Virtuoso
            endReached={loadMore}
            data={users}
            isScrolling={setIsScrolling}
            itemContent={template}
            components={{
              Footer: moreLoading,
            }}
          />
        </Tabs.TabPane> */}
      </WGVantTabs>
    </WGScroll>
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
      content={content()}
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
