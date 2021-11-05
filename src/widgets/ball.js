import styled from 'styled-components';
import { combinedStyle } from '@utils/style';

export const WGBall = styled.div`
  width: 20px;
  height: 20px;
  background: #438bfb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  &:nth-child(n) {
    margin-right: 8px;
  }

  ${props => combinedStyle(props)}
`;
