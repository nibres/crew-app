// @flow
const FILTER_OPTION_NAME_KEY: string = 'FILTER_OPTION_NAME_KEY';
const FILTER_OPTION_CITY_KEY: string = 'FILTER_OPTION_CITY_KEY';

export default {
  get filterName(): ?string {
    return localStorage[FILTER_OPTION_NAME_KEY];
  },

  set filterName(name: ?string) {
    localStorage[FILTER_OPTION_NAME_KEY] = name;
  },

  get filterCity(): ?string {
    return localStorage[FILTER_OPTION_CITY_KEY];
  },

  set filterCity(city: ?string) {
    localStorage[FILTER_OPTION_CITY_KEY] = city;
  },
};
