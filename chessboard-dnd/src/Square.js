import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {

    render() {
        const { black } = this.props;
        // fill will alternate the Square backgroundColor using a ternary
        const fill = black ? 'black' : 'white';
        // stroke will alternate the Knight color to be opposite of its parent square
        const stroke = black ? 'white' : 'black';
        
        return (
            <div style={{ 
                backgroundColor: fill,
                color: stroke,
                width: '100%',
                height: '100%',
            }}>
                {this.props.children}
            </div>
        );
    }
}

// Enforces that the square color prop is of the boolean type
Square.propTypes = {
    black: PropTypes.bool
}
