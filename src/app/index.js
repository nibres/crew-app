// @flow
import React from 'react';

import CrewTable from './CrewTable';
import FilterPanel from './FilterPanel';
import CrewContent from './CrewContent';

const App = () => (
  <CrewContent>
    <FilterPanel />
    <CrewTable />
  </CrewContent>
);

export default App;
