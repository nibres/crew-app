// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import { AppContent } from '../common/Styled';

import { fetchCrew as fetchCrewAction } from '../actions';

type OwnProps = {|
  children: React.Node[]
|}

type Props = {
  ...OwnProps,
  crew: ?Person[],
  fetchCrew: () => void,
  error: ?Error,
}

class CrewContent extends React.Component<Props> {
  componentDidMount() {
    const { crew, fetchCrew } = this.props;

    if (crew && crew.length > 0 && !fetchCrew) {
      return;
    }

    fetchCrew();
  }

  componentDidUpdate(prevProps: Props) {
    const { error } = this.props;
    if (error && !prevProps.error) {
      // eslint-disable-next-line no-alert
      alert(error);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <AppContent>
        { children }
      </AppContent>
    );
  }
}

const mapStateToProps = ({
  error,
  crew,
}) => ({
  crew,
  error,
});

const mapDispatchToProps = dispatch => ({
  fetchCrew: () => dispatch(fetchCrewAction()),
});

export default connect<Props, OwnProps, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps,
)(CrewContent);
