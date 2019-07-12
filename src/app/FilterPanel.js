// @flow
import { connect } from 'react-redux';

import {
  resetFilters as resetFiltersAction,
  filterCrewByName as filterCrewByNameAction,
  filterCrewByCity as filterCrewByCityAction,
} from '../actions';

import FilterPanel from '../components/FilterPanel';

import type { Props } from '../components/FilterPanel';

const mapStateToProps = ({
  filterName,
  filterCity,
}) => ({
  name: filterName,
  city: filterCity,
});

const mapDispatchToProps = dispatch => ({
  resetFilters: () => dispatch(resetFiltersAction()),
  changeFilterCrewName: name => dispatch(filterCrewByNameAction(name)),
  changeFilterCrewCity: city => dispatch(filterCrewByCityAction(city)),
});

export default connect<Props, EmptyProps, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps,
)(FilterPanel);
