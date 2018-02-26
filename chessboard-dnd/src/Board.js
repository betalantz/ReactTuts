import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import Knight from './Knight';
import { moveKnight } from './Game'

export default class Board extends Component {
    renderSquare(i) { 
        // constrain x, y coordinates of Squares to 8x8 grid
        const x = i % 8;
        const y = Math.floor(i/8);
        // alternate bool value of 'black' based on even/odd square coordinate
        const black = (x + y) % 2 === 1;

        const [knightX, knightY] = this.props.knightPosition;
        // use ternary to evaluate whether coordinates of rendering Square match Knight's coord
        const piece = (x === knightX && y === knightY) ?
            <Knight /> :
            null;
        
        return (
            // must assign unique key to iteratively generated components
            // adding onClick event handler
            <div key={i}
                style={{ width: '12.5%', height: '12.5%' }}
                onClick={() => this.handleSquareClick(x, y)}>
                <Square black={black}>
                    {piece}
                </Square>
            </div>
        );
    }

    // update the clicked Square state on Game
    handleSquareClick(toX, toY) {
        moveKnight(toX, toY)
    }
    
    render() {
        // squares array will contain all generated squares
        // loop sets total number of squares (here, 64)
        const squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }
        return (
            // encapsulate components by wrapping in divs
            // use flexbox layout and give dimensions to board
            // to constrain aspect ratio
             <div style={{
                 width: '500px',
                 height: '500px',
                 display: 'flex',
                 flexWrap: 'wrap'
             }}>
                {squares}
            </div>
        );
    }
}
// enforce assignment of knightPosition as array of type number
Board.propTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired
};