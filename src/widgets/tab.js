import styled from 'styled-components';
import { Tabs } from 'react-vant';

export const WGVantTans = styled(Tabs)`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .rv-swiper__track-inner {
    height: 100%;
  }

  .rv-tabs__pane-wrapper {
    height: 100%;
  }

  .rv-tab__pane {
    height: 100%;
  }
`;
