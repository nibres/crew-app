// @flow

import type { Reducer } from 'redux';

import {
  CREW_START_LOADING,
  CREW_FINISH_LOADING,
  CREW_FAILED_LOADING,

  CREW_SET_STATUS,
} from '../actions/AcitonTypes';

import { STAGES, STAGE } from '../common/Constants';

const DEFAULT_STATE: State = {
  stages: STAGES,
  crew: [],
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
