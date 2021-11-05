import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { combinedStyle } from '@utils/style';
// import { themeRootVars } from '@constants/css/vantTheme';

export const WGContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const WGScroll = styled.div`
  height: auto;
  flex: auto;
  overflow: scroll;
`;

export const WGHeader = styled.div`
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #ffaa00;
`;

export const WGFooter = styled.div`
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #aaaa00;
`;
