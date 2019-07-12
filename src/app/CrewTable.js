// @flow
import { connect } from 'react-redux';

import { setCrewStatus as setCrewStatusAction } from '../actions';

import CrewTable from '../components/CrewTable';
import type { Props } from '../components/CrewTable';

const mapStateToProps = ({
  stages,
  crew,
}) => ({
  stages,
  crew,
});

const mapDispatchToProps = dispatch => ({
  setCrewStage: (person, stage) => dispatch(
    setCrewStatusAction(person, stage),
  ),
});

export default connect<Props, EmptyProps, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps,
)(CrewTable);
