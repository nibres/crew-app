// @flow

function getUsersURL(numberOfUsers: number = 5): string {
  return `https://randomuser.me/api/?nat=gb&results=${numberOfUsers}`;
}

export async function fetchCrew(): Promise<Person[]> {
  const response = await fetch(getUsersURL());
  const json = await response.json();
  const { results } = json;
  return results;
}
