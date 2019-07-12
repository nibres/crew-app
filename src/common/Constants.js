// @flow

export const STAGE: StageEnum = Object.freeze({
  APPLIED: 'Applied',
  INTERVIEWING: 'Interviewing',
  HIRED: 'Hired',
});

export const STAGES: StageList = Object.freeze([
  { id: STAGE.APPLIED, title: 'Applied' },
  { id: STAGE.INTERVIEWING, title: 'Interviewing' },
  { id: STAGE.HIRED, title: 'Hired' },
]);
