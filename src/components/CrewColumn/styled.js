// @flow
import styled from 'styled-components';

import {
  FlexDirectionColumn,
  Text,
} from '../../common/Styled';

export const Col = styled(FlexDirectionColumn)`
  flex-basis: 100%;
  flex: 1;

  margin: 1rem;

  border: 0.1rem solid;
  border-radius: 0.5rem;
`;

export const ColTitle = styled(Text)`
  text-align: center;
  padding: 1rem;
  font-weight: bold;
`;

export const ColContent = styled.div``;
