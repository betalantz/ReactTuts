import React from 'react';
import ReactDOM from 'react-dom';
// import Knight from './Knight';
// import Square from './Square'
import Board from './Board';

// entry point to the DOM
ReactDOM.render(
    // knightPosition is the only state that we'll need to track, probably eventually on the Board component
    // We'll hard code it here for now
    <Board knightPosition={[0,0]} />,
    document.getElementById('root')
);