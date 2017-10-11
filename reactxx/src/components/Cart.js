import React, { Component } from 'react';
import CartItem from './CartItem';
import './Cart.css'

class Cart extends Component{
  constructor(props){
    super(props);
    this.state = {
      itemList: props.itemList
    }
  }

  render(){
    return(
      <div>
        <div className='CartHead'>
          <div><input type='checkbox'/></div>
          <div>Product Name</div>
          <div>Unit Price</div>
          <div>Total Price</div>
          <div>Count</div>
          <div>Operate</div>
        </div>
        <div className='CartBody'>
          {this.state.itemList.map((item)=>
            <CartItem price={item} />
          )}
        </div>
      </div>
    );
  }
}


export default Cart;
