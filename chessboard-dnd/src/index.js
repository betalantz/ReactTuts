import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
// Game will be the new state manager
import { observe } from './Game'

// entry point to the DOM
const rootEl = document.getElementById('root');
// observe establishes a subscription API for the knightPosition state
observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);