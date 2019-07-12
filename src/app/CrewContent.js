// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import { AppContent } from '../common/Styled';
import Loading from '../components/Loading';

import { fetchCrew as fetchCrewAction } from '../actions';

type OwnProps = {|
  children: React.Node[]
|}

type Props = {
  ...OwnProps,
  crew: ?Person[],
  fetchCrew: () => void,
  isLoading: ?boolean,
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
    const { children, isLoading } = this.props;
    return (
      <AppContent>
        { isLoading && (<Loading />) }
        { children }
      </AppContent>
    );
  }
}

const mapStateToProps = ({
  isLoading,
  error,
  crew,
}) => ({
  crew,
  isLoading,
  error,
});

const mapDispatchToProps = dispatch => ({
  fetchCrew: () => dispatch(fetchCrewAction()),
});

export default connect<Props, OwnProps, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps,
)(CrewContent);
