import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      unitPrice: props.price,
      counter: 1
    };
    this.changeCount = this.changeCount.bind(this);
  }

  changeCount(changeNum, event){
    event.preventDefault();
    this.setState(function(prevState, props) {
      return {
        counter: (prevState.counter + changeNum) < 1 ? 1 : (prevState.counter + changeNum)
      };
    });
  }

  render(){
    return(
      <div className="CartItem">
        <div><input type='checkbox' /></div>
        <div><span>Product Name</span></div>
        <div>{this.state.unitPrice}</div>
        <div>{this.state.unitPrice * this.state.counter}</div>
        <div>
          <button onClick={this.changeCount.bind(this, -1)}>-</button>
          <input type='text' defaultValue={this.state.counter} value={this.state.counter} />
          <button onClick={this.changeCount.bind(this, +1)}>+</button>
        </div>
        <div><button>Delete</button></div>
      </div>
    );
  }
}

export default CartItem;
