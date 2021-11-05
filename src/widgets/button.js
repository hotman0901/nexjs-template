import styled from 'styled-components';
import { combinedStyle } from '@utils/style';

export const WGButton = styled.div`
  border-radius: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 9px;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  ${props => combinedStyle(props)}
`;

export const WGButtonRadius = styled(WGButton)`
  ${props => combinedStyle(props)}
`;
