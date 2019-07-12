// @flow
import React from 'react';

import { capitalize } from '../../common/Helpers';

import {
  ArrowLeft,
  ArrowRight,
  Content,
  UserInfoSection,
  ProfilePhoto,
  UserDetail,
  ActionsSection,
  Action,
  ActionFlexSpace,
  Text,
} from './styled';

type Props = {
  person: Person,
  canMoveLeft: boolean,
  canMoveRight: boolean,
  onMoveLeftPress: Function,
  onMoveRightPress: Function
}

class CrewListCell extends React.PureComponent<Props> {
  render() {
    const {
      person,
      canMoveLeft = false,
      canMoveRight = false,
      onMoveLeftPress = () => undefined,
      onMoveRightPress = () => undefined,
    } = this.props;

    const {
      picture: { thumbnail },
      name: {
        title,
        first,
        last,
      },
    } = person;

    const fillName = [
      capitalize(title),
      capitalize(first),
      capitalize(last),
    ].join(' ');

    return (
      <Content>
        <UserInfoSection>
          <ProfilePhoto src={thumbnail} />
          <UserDetail>
            <Text>{fillName}</Text>
          </UserDetail>
        </UserInfoSection>
        <ActionsSection>
          { canMoveLeft && (
            <Action onClick={() => onMoveLeftPress()}>
              <ArrowLeft />
            </Action>
          )}
          <ActionFlexSpace />
          { canMoveRight && (
            <Action onClick={() => onMoveRightPress()}>
              <ArrowRight />
            </Action>
          )}
        </ActionsSection>
      </Content>
    );
  }
}

export default CrewListCell;
