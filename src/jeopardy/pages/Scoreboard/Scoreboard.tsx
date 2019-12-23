import * as React from 'react';
import styled from '@emotion/styled';
import { ScoreboardUser } from './ScoreboardUser';
import { useStateValue } from '../../Redux';

const ScoreboardRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 64px;
  position: sticky;
  bottom: 0;
`;

const ScoreboardContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export function Scoreboard() {
  const [{ users }] = useStateValue();
  return (
    <ScoreboardContainer>
      <ScoreboardRow>
        {users && users.map(user => <ScoreboardUser key={user.name} user={user} />)}
      </ScoreboardRow>
    </ScoreboardContainer>
  );
}
