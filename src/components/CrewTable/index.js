// @flow
import React from 'react';

import {
  getCrewForStage,
  getNextStageForStage,
  getPreviousStageForStage,
} from '../../common/Helpers';

import {
  Table,
} from './styled';

import CrewCell from '../CrewListCell';
import CrewColumn from '../CrewColumn';

export type Props = {
  crew: Person[],
  stages: StageList,
  setCrewStage: (Person, Stage) => void
}

class CrewTable extends React.PureComponent<Props> {
  renderList = (stage: Stage) => {
    const { crew, stages, setCrewStage } = this.props;
    const stageList = stages.map(({ id }) => id);
    const stageCrew = getCrewForStage(crew, stage);
    const nextStage = getNextStageForStage(stage, stageList);
    const previousStage = getPreviousStageForStage(stage, stageList);

    return (
      <React.Fragment>
        {stageCrew.map((person) => {
          const { id: { name, value } } = person;
          return (
            <CrewCell
              key={`${name}_${value}`}
              person={person}
              canMoveLeft={!!previousStage}
              canMoveRight={!!nextStage}
              onMoveLeftPress={() => previousStage && setCrewStage(person, previousStage)}
              onMoveRightPress={() => nextStage && setCrewStage(person, nextStage)}
            />
          );
        })}
      </React.Fragment>
    );
  }

  render() {
    const { stages } = this.props;
    return (
      <Table>
        { stages.map(({ id, title }) => (
          <CrewColumn key={`${id}`} title={title}>
            {this.renderList(id)}
          </CrewColumn>
        ))}
      </Table>
    );
  }
}

export default CrewTable;
