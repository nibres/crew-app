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

export function filterCrew(crew: Person[] = [], filterOptions: FilterOptions): Person[] {
  const name = (filterOptions.name || '').toLowerCase();
  const city = (filterOptions.city || '').toLowerCase();

  return crew.filter(({
    name: { first: firstName, last: lastName },
    location: { city: cityName },
  }) => cityName.toLowerCase().includes(city)
      && `${firstName.toLowerCase()} ${lastName.toLowerCase()}`.includes(name));
}
