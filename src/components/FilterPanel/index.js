// @flow
import React from 'react';

import {
  Content,
  Section,
  LabelText,
} from './styled';

export type Props = {
  name: string,
  city: string,
  changeFilterCrewName: (string) => void,
  changeFilterCrewCity: (string) => void,
  resetFilters: () => void
}

class FilterPanel extends React.PureComponent<Props> {
  render() {
    const {
      name,
      city,
      changeFilterCrewName,
      changeFilterCrewCity,
      resetFilters,
    } = this.props;

    return (
      <Content>
        <Section>
          <LabelText>Name:</LabelText>
          <input
            type="text"
            name="name"
            value={name}
            onChange={event => changeFilterCrewName(event.target.value)}
          />
        </Section>
        <Section>
          <LabelText>City:</LabelText>
          <input
            type="text"
            name="city"
            value={city}
            onChange={event => changeFilterCrewCity(event.target.value)}
          />
        </Section>
        <Section>
          <button type="button" onClick={() => resetFilters()}>Reset</button>
        </Section>
      </Content>
    );
  }
}

export default FilterPanel;
