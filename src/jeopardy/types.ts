export type User = {
  name: string;
  score: number;
};

export type GameCategory = {
  categoryName: string;
  categoryInfo: Question[];
};

export const GAME_SCREEN = {
  QUESTION_PAGE: 'QUESTION_PAGE',
  BOARD_PAGE: 'BOARD_PAGE',
  FINAL_JEOPARDY: 'FINAL_JEOPARDY',
  WINNER: 'WINNER',
} as const;

export const TYPE_KEYS = {
  SUBTRACT_POINTS: 'SUBTRACT_POINTS',
  ADD_POINTS: 'ADD_POINTS',
  SWITCH_VIEW: 'SWITCH_VIEW',
  SELECT_CELL: 'SELECT_CELL',
} as const;

type ACTIONS_TYPE = typeof TYPE_KEYS;
type ACTIONS_KEYS = keyof ACTIONS_TYPE;
export type ACTIONS_VALUES = ACTIONS_TYPE[ACTIONS_KEYS];

export type SELECT_CELL = {
  type: ACTIONS_TYPE['SELECT_CELL'];
  category: string;
  points: number;
};

export type ADD_POINTS = {
  type: ACTIONS_TYPE['ADD_POINTS'];
  userName: string;
  points: number;
};

export type SUBTRACT_POINTS = {
  type: ACTIONS_TYPE['SUBTRACT_POINTS'];
  userName: string;
  points: number;
};

type GAME_SCREEN_TYPE = typeof GAME_SCREEN;
type GAME_SCREEN_TYPE_KEYS = keyof GAME_SCREEN_TYPE;
export type GAME_SCREEN_TYPE_VALUES = GAME_SCREEN_TYPE[GAME_SCREEN_TYPE_KEYS];

export type SWITCH_VIEW = {
  type: ACTIONS_TYPE['SWITCH_VIEW'];
  view: GAME_SCREEN_TYPE_VALUES;
  question?: Question;
};

export type ActionTypes = ADD_POINTS | SUBTRACT_POINTS | SWITCH_VIEW | SELECT_CELL;

export type Question = {
  points: number;
  // Question
  value: string;
  isDailyDouble: boolean;
  hasBeenSelected: boolean;
};

export type API = {
  categoryName: string;
  categoryInfo: Question[];
}[];

export type StateType = {
  questions: API;
  users: User[];
  question: Question | null;
  mode: GAME_SCREEN_TYPE_VALUES;
};
