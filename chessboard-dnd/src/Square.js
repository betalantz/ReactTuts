import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {

    render() {
        // destructuring assignment of 'black' property from props to distinct variable
        const { black } = this.props;
        // fill will alternate the Square backgroundColor using a ternary
        const fill = black ? 'black' : 'white';
        // stroke will alternate the Knight color to be opposite of square background color
        const stroke = black ? 'white' : 'black';
        
        return (
            // give each Square its color properties and dimension
            // pass children to the props so Square will be aware of Knight
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

// Declares a boolean-type variable which will track the state of the fill and stroke color
Square.propTypes = {
    black: PropTypes.bool
}
