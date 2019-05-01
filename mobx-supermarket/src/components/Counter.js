import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class Counter extends Component {
  render() {
    const { number, increase, decrease } = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    );
  }
}

export default inject(({ counter }) => ({
  number: counter.number,
  increase: counter.increase,
  decrease: counter.decrease,
}))(observer(Counter));