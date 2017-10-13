import React, { Component } from 'react';
import Goods from './Goods';

class MobileStore extends Component{
  constructor(){
    super();

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      itemList: [],
      total: 0,
      currentItem: null
    }
  }

  addToCart(item){
    // console.log(item.id);

  }

  render(){
    return (
      <Goods goods={this.props.goods} handleClick={this.addToCart} />
    );
  }
}

MobileStore.defaultProps = {
  goods : [
    {
      id: 1,
      name: 'iPod Touch',
      price: 99.99
    },
    {
      id: 2,
      name: 'iPhone 5',
      price: 399.99
    },
    {
      id: 3,
      name: 'Nexus 7',
      price: 199.99
    },
    {
      id: 4,
      name: 'Mi 6',
      price: 299.99
    }
  ]
}

export default MobileStore;
