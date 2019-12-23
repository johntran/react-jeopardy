import { API } from '../types';

export function isBoardCleared(api: API) {
  const hasRemaining = api.some(({ categoryInfo }) => {
    const remainingQuestions = categoryInfo.filter(question => !question.hasBeenSelected).length;
    return remainingQuestions > 0;
  });
  return !hasRemaining;
}
