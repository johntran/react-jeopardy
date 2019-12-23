import * as React from 'react';
import Cell from './Cell';
import Column from './Column';
import { GameCategory, TYPE_KEYS, GAME_SCREEN } from './types';
import { BoardContainer, CompleteColumn } from '../styles/board';
import CategoryCell from './CategoryCell';
import { isBoardCleared } from './utilities/isBoardCleared';
import { useStateValue } from './Redux';
import { finalJeopardy } from './utilities/finalJeopardy';

const Board = () => {
  const [{ questions }, dispatch] = useStateValue();
  // Switch to Final Jeopardy if no questions left
  React.useEffect(() => {
    const isCleared = isBoardCleared(questions);
    if (isCleared) {
      setTimeout(() => {
        // dispatch({})
        dispatch({
          type: TYPE_KEYS.SWITCH_VIEW,
          view: GAME_SCREEN.FINAL_JEOPARDY,
          question: finalJeopardy(),
        });
      }, 3000);
    }
  }, [questions]);
  return (
    <BoardContainer>
      {questions.map((category: GameCategory, index: number) => {
        const { categoryName, categoryInfo } = category;
        return (
          <CompleteColumn>
            {/* <Cell value={categoryName} /> */}
            <CategoryCell value={categoryName} />
            <Column category={categoryName} questions={categoryInfo} />
          </CompleteColumn>
        );
      })}
    </BoardContainer>
  );
};

export default Board;
