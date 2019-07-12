// @flow
import styled from 'styled-components';

import {
  Arrow,
  FlexDirectionColumn,
  FlexDirectionRow,
  Text,
} from '../../common/Styled';

export { Text };

export const ArrowLeft = styled(Arrow)`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export const ArrowRight = styled(Arrow)`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

export const Content = styled(FlexDirectionColumn)`
  margin: 1rem;
  border: 0.1rem solid;
  border-radius: 0.5rem;
  overflow: hidden;

  flex-wrap: nowrap;
`;

export const UserInfoSection = styled(FlexDirectionRow)``;

export const ProfilePhoto = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
  border-radius: 50%;
`;

export const UserDetail = styled(FlexDirectionColumn)`
  flex: 1;
  justify-content: center;
`;

export const ActionsSection = styled(FlexDirectionRow)``;

export const Action = styled.button`
  padding: 1rem;

  background-color: transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
`;

export const ActionFlexSpace = styled.div`
  flex: 1;
`;
