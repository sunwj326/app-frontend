import React, { Component } from 'react';

class NumberList extends Component{
  constructor(props){
    super(props);
    this.state = {
      numbers: [1,2,3,4]
    }
    this.popNumber = this.popNumber.bind(this);
  }

  popNumber(){
    // this.state.numbers.pop();
    this.setState(provState=>{
      provState.numbers.splice(0,1);
      return {
        numbers: provState.numbers
      }
    });
  }

  render(){
    let numbers = this.state.numbers;
    let list = numbers.map(number=>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <div>
      <ul>
        {list}
      </ul>
      <button onClick={this.popNumber}>pop</button>
      </div>
    );
  }
}

export default NumberList;
