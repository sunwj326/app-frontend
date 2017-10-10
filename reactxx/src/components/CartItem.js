import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      unitPrice: props.unitPrice,
      count: 1
    }
  }

  render(){
    return(
      <div className="CartItem">
        <div><input type='checkbox' /></div>
        <div><span>Product Name</span></div>
        <div>{this.state.unitPrice}</div>
        <div>{this.state.unitPrice * this.state.count}</div>
        <div><input type='text' value={this.state.count} /></div>
      </div>
    );
  }
}

export default CartItem;
