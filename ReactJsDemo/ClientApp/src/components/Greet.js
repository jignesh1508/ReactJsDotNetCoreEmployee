import React, { Component } from 'react';


export class Greet extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        const { name, city } = this.props;
        return (
            <h1>Hello {name} , City : {city}</h1>
            );
        
    }

}