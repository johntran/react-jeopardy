import { isBoardCleared } from '../isBoardCleared';

const falseApi = [
  {
    categoryName: 'Category1',
    categoryInfo: [
      {
        points: 100,
        value: 'I am cat 1 value 1',
        isDailyDouble: false,
        hasBeenSelected: false,
      },
      {
        points: 200,
        value: 'I am cat 1 value 2',
        isDailyDouble: false,
        hasBeenSelected: false,
      },
      {
        points: 300,
        value: 'I am cat 1 value 3',
        isDailyDouble: false,
        hasBeenSelected: false,
      },
      {
        points: 400,
        value: 'I am cat 1 value 4',
        isDailyDouble: false,
        hasBeenSelected: false,
      },
      {
        points: 500,
        value: 'I am cat 1 value 5',
        isDailyDouble: false,
        hasBeenSelected: false,
      },
    ],
  },
  {
    categoryName: 'Category2',
    categoryInfo: [
      {
        points: 100,
        value: 'I am cat 2 value 1',
        isDailyDouble: false,
        hasBeenSelected: false,
      },
      {
        points: 200,
        value: 'I am cat 2 value 2',
        isDailyDouble: false,
        hasBeenSelected: false,
      },
      {
        points: 300,
        value: 'I am cat 2 value 3',
        isDailyDouble: false,
        hasBeenSelected: false,
      },
      {
        points: 400,
        value: 'I am cat 2 value 4',
        isDailyDouble: false,
        hasBeenSelected: false,
      },
      {
        points: 500,
        value: 'I am cat 2 value 5',
        isDailyDouble: false,
        hasBeenSelected: false,
      },
    ],
  },
];

const trueAPI = [
  {
    categoryName: 'Category1',
    categoryInfo: [
      {
        points: 100,
        value: 'I am cat 1 value 1',
        isDailyDouble: false,
        hasBeenSelected: true,
      },
      {
        points: 200,
        value: 'I am cat 1 value 2',
        isDailyDouble: false,
        hasBeenSelected: true,
      },
      {
        points: 300,
        value: 'I am cat 1 value 3',
        isDailyDouble: false,
        hasBeenSelected: true,
      },
      {
        points: 400,
        value: 'I am cat 1 value 4',
        isDailyDouble: false,
        hasBeenSelected: true,
      },
      {
        points: 500,
        value: 'I am cat 1 value 5',
        isDailyDouble: false,
        hasBeenSelected: true,
      },
    ],
  },
  {
    categoryName: 'Category2',
    categoryInfo: [
      {
        points: 100,
        value: 'I am cat 2 value 1',
        isDailyDouble: false,
        hasBeenSelected: true,
      },
      {
        points: 200,
        value: 'I am cat 2 value 2',
        isDailyDouble: false,
        hasBeenSelected: true,
      },
      {
        points: 300,
        value: 'I am cat 2 value 3',
        isDailyDouble: false,
        hasBeenSelected: true,
      },
      {
        points: 400,
        value: 'I am cat 2 value 4',
        isDailyDouble: false,
        hasBeenSelected: true,
      },
      {
        points: 500,
        value: 'I am cat 2 value 5',
        isDailyDouble: false,
        hasBeenSelected: true,
      },
    ],
  },
];

describe('isBoardCleared', () => {
  test(`returns false if at least one question returns 'false' for 'hasBeenSelected'`, () => {
    const actual = isBoardCleared(falseApi);
    expect(actual).toEqual(false);
  });
  test(`returns true if all questions returns 'true' for 'hasBeenSelected'`, () => {
    const actual = isBoardCleared(trueAPI);
    expect(actual).toEqual(true);
  });
});
