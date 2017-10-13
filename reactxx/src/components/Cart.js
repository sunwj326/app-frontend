import React, { Component } from 'react';
import CartItem from './CartItem';
import './Cart.css'

class Cart extends Component{
  constructor(props){
    super(props);
    this.state = {
      itemList: props.itemList
    }
    //this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleDeleteItem(id){
    this.setState(prevState=>{
      prevState.itemList.splice(id, 1);
      return {
        itemList: prevState.itemList
      }
    });
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
          {this.props.itemList.map((item, index)=>
            <CartItem price={item} id={index} onDeleteItem={this.handleDeleteItem.bind(this, index)}/>
          )}
        </div>
      </div>
    );
  }
}


export default Cart;
