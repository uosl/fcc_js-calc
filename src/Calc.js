import React, { Component } from 'react';
import './Calc.css';
import Display from './Display';
import Interface from './Interface';

class Calc extends Component {
  render() {
    return (
      <div className="Calc">
        <Display text="Calculating..." subtext="1+1" />
        <Interface />
      </div>
    );
  }
}

export default Calc;
