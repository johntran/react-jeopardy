import * as React from 'react';
import styled from '@emotion/styled';
import { useStateValue } from './Redux';

const Text = styled.div`
  font-size: 64px;
  text-align: center;
  padding: 64px;
`;

export function QuestionPage() {
  const [{ question }] = useStateValue();
  return <Text>{question.value}</Text>;
}
