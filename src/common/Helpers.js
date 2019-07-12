// @flow

export function capitalize(value: string = ''): string {
  return [
    value.charAt(0).toUpperCase(),
    value.slice(1),
  ].join('');
}

export function getCrewForStage(crew: Person[] = [], stage: Stage): Person[] {
  return crew
    .filter(user => user.status === stage);
}

export function getNextStageForStage(stage: Stage, stages: Array<Stage>): ?Stage {
  const loc = stages.indexOf(stage);
  if (loc === -1) { return null; }
  return stages[loc + 1] || null;
}

export function getPreviousStageForStage(stage: Stage, stages: Array<Stage>): ?Stage {
  const loc = stages.indexOf(stage);
  if (loc === -1) { return null; }
  return stages[loc - 1] || null;
}
