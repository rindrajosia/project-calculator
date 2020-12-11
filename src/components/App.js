import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const calc = calculate({ total, next, operation }, buttonName);
    this.setState({
      next: `${calc.next}`,
      total: `${calc.total}`,
      operation: `${calc.operation}`,
    });
  }

  render() {
    const { next } = this.state;
    return (
      <>
        <Display
          result={next === null ? '0' : next}
        />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
