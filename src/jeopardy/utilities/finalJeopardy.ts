import { Question } from '../types';

export function finalJeopardy(): Question {
  return {
    points: 0,
    // Question
    value: 'This is a Final Jeopardy Question',
    isDailyDouble: false,
    hasBeenSelected: false,
  };
}
