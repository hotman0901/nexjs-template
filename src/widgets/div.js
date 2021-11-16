import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { combinedStyle } from '@utils/style';
// import { themeRootVars } from '@constants/css/vantTheme';

export const WGContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 0;
`;

export const WGScroll = styled(motion.div)`
  height: auto;
  flex: auto;
  overflow: scroll;
  z-index: 0;
`;

export const WGHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const WGFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 0;
`;

export const WGDropMenuText = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  padding: var(--rv-dropdown-menu-title-padding);
  color: var(--rv-dropdown-menu-title-text-color);
  font-size: var(--rv-dropdown-menu-title-font-size);
  line-height: var(--rv-dropdown-menu-title-line-height);
`;
