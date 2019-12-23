import React from 'react';
import Cell from './Cell';
import { Question } from './types';
import { Questions } from '../styles/board';

const Column = ({ questions, category }: { questions: Question[]; category: string }) => {
  return (
    <Questions>
      {questions.map((question, index) => {
        const { value, points, hasBeenSelected } = question;
        return (
          <Cell key={value} points={points} category={category} hasBeenSelected={hasBeenSelected} />
        );
      })}
    </Questions>
  );
};

export default Column;
