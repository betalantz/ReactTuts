import React, { Component } from 'react';

export default class Knight extends Component {
    // this component needs no props and is owned by Board
    render() {
        return <span style={{
            fontSize: '2.5em',
            paddingLeft: '.25em',
        }}>♘</span>
    }
}