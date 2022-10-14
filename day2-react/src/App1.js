import React, { Component } from 'react'
import { AddButton, Counter } from './components';
import './App.css';

export default class App1 extends Component {
    constructor(){
        super();
        this.state = {
            counter : 0,
        }
    }

    incrementCounter = () => {
        let newCounter = this.state.counter + 1;
        this.setState({counter : newCounter});
    }

    render() {
        return (
        <div>
            <AddButton incrementCounter = {this.incrementCounter} />
            <Counter counter = {this.state.counter} />
        </div>
        )
    }
}

