// @flow

import type { Reducer } from 'redux';

import {
  CREW_START_LOADING,
  CREW_FINISH_LOADING,
  CREW_FAILED_LOADING,

  CREW_SET_STATUS,

  SET_FILTER_NAME,
  SET_FILTER_CITY,
  RESET_FILTERS,
} from '../actions/AcitonTypes';

import Storage from '../common/Storage';
import { STAGES, STAGE } from '../common/Constants';

const DEFAULT_STATE: State = {
  stages: STAGES,
  crew: [],
  filterName: Storage.filterName || '',
  filterCity: Storage.filterCity || '',

  isLoading: false,
  error: null,
};

const handlers = {
  [CREW_START_LOADING]: state => ({
    ...state,
    crew: [],
    isLoading: true,
    error: null,
  }),

  [CREW_FINISH_LOADING]: (state, payload) => ({
    ...state,
    crew: payload.map(person => ({
      ...person,
      status: STAGE.APPLIED,
    })),
    isLoading: false,
  }),

  [CREW_FAILED_LOADING]: (state, payload) => ({
    ...state,
    crew: [],
    isLoading: false,
    error: payload,
  }),

  [CREW_SET_STATUS]: (state, { person, status }) => ({
    ...state,
    crew: state.crew.map((member) => {
      if (member !== person) { return member; }
      return {
        ...member,
        status,
      };
    }),
  }),

  [SET_FILTER_NAME]: (state, payload) => {
    Storage.filterName = payload;
    return ({
      ...state,
      filterName: payload,
    });
  },

  [SET_FILTER_CITY]: (state, payload) => {
    Storage.filterCity = payload;
    return ({
      ...state,
      filterCity: payload,
    });
  },

  [RESET_FILTERS]: state => ({
    ...state,
    filterName: '',
    filterCity: '',
  }),
};

const appReducer: Reducer<State, Actions> = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  const handler = handlers[type];
  if (handler) {
    return handler(state, payload);
  }

  return state;
};

export default appReducer;
