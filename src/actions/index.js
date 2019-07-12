// @flow
import type { Dispatch } from 'redux';

import {
  CREW_START_LOADING,
  CREW_FINISH_LOADING,
  CREW_FAILED_LOADING,

  CREW_SET_STATUS,
} from './AcitonTypes';

import { fetchCrew as fetchCrewRequest } from '../common/Http';

function crewLoadingStarted(): CrewLoadingStartedAction {
  return ({ type: CREW_START_LOADING });
}

function crewLoadingFinished(crew: Person[]): CrewLoadingFinishedAction {
  return ({
    type: CREW_FINISH_LOADING,
    payload: crew,
  });
}

function crewLoadingFailed(e: Error): CrewLoadingFailedAction {
  return ({
    type: CREW_FAILED_LOADING,
    payload: e,
  });
}

export function fetchCrew() {
  return async (dispatch: Dispatch<CrewLoadingActions>) => {
    dispatch(crewLoadingStarted());
    try {
      const listOfCandidates = await fetchCrewRequest();
      dispatch(crewLoadingFinished(listOfCandidates));
    } catch (e) {
      console.error(`Error: ${e} stack: ${e.stack} `);
      dispatch(crewLoadingFailed(e));
    }
  };
}

export function setCrewStatus(person: Person, status: Stage): SetCrewStatusAction {
  return ({
    type: CREW_SET_STATUS,
    payload: {
      person,
      status,
    },
  });
}
