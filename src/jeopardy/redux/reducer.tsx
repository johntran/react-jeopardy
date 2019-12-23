import produce from 'immer';
import { ActionTypes, StateType, TYPE_KEYS, GAME_SCREEN } from '../types';

// type ACTIONS_TYPE = typeof ACTIONS;
// type ACTIONS_KEYS = keyof ACTIONS_TYPE;
// type ACTIONS_VALUES = ACTIONS_TYPE[ACTIONS_KEYS];

export function reducer(state: StateType, action: ActionTypes) {
  return produce<StateType>(state, draft => {
    switch (action.type) {
      case TYPE_KEYS.SUBTRACT_POINTS: {
        const { userName, points } = action;
        const userIndex = draft.users.findIndex(user => user.name === userName);
        if (userIndex || userIndex === 0) {
          draft.users[userIndex].score -= points;
        }
        return;
      }
      case TYPE_KEYS.ADD_POINTS: {
        const { userName, points } = action;
        const userIndex = draft.users.findIndex(user => user.name === userName);
        if (userIndex || userIndex === 0) {
          draft.users[userIndex].score += points;
        }
        return;
      }
      case TYPE_KEYS.SWITCH_VIEW: {
        const { view, question } = action;
        if (view in GAME_SCREEN) {
          draft.mode = view;
        } else {
          draft.mode = GAME_SCREEN.BOARD_PAGE;
        }
        return;
      }
      case TYPE_KEYS.SELECT_CELL: {
        const { category, points }: { category: string; points: number } = action;
        const { questions } = state;
        const categoryIndex = questions.findIndex(question => question.categoryName === category);
        const cellIndex = questions[categoryIndex].categoryInfo.findIndex(
          question => question.points === points,
        );
        const question = draft.questions[categoryIndex].categoryInfo[cellIndex];
        question.hasBeenSelected = true;
        draft.question = question;
        return;
      }
      default:
        return state;
    }
  });
}
