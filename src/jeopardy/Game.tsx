import * as React from 'react';
import { Global, css } from '@emotion/core';
import { StateProvider } from './Redux';
import { GameLayout } from './GameLayout';

export function Game() {
  return (
    <StateProvider>
      <Global
        styles={css`
          html {
            background-color: tan;
            font: 16px Arial;
          }
        `}
      />
      <>
        <GameLayout />
      </>
    </StateProvider>
  );
}
