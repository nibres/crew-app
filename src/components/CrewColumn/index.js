// @flow
import * as React from 'react';

import {
  Col,
  ColTitle,
  ColContent,
} from './styled';

type Props = {
  title: string,
  children: React.Node[] | React.Node
}

class CrewColumn extends React.PureComponent<Props> {
  render() {
    const { title, children } = this.props;
    return (
      <Col>
        <ColTitle>{ title }</ColTitle>
        <ColContent>{ children }</ColContent>
      </Col>
    );
  }
}

export default CrewColumn;
