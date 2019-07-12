// @flow
import styled from 'styled-components';

import {
  Text,
} from '../../common/Styled';

export { Text };

export const LoadingModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0,0,0,0.1);
`;
