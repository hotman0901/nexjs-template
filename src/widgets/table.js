import styled from 'styled-components';
import { combinedStyle } from '@utils/style';

export const WGTable = styled.div`
  height: 100%;
  font-size: 15px;
  font-weight: 500;
`;

export const WGTableScroll = styled(WGTable)`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const WGTHead = styled.div`
  padding: ${({ theme }) => theme.padding} 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
`;

export const WGBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.row.lastChildMargin};
`;

export const WGTr = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const WGTh = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  ${props => combinedStyle({ ...props })}
`;

export const WGTd = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => combinedStyle({ ...props })}
`;
