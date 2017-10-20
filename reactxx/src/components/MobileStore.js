import React, { Component } from 'react';
import './MobileStore.css'
import MobileForm from './MobileForm';
import MobileList from './MobileList';
var G = new (require("generate-id"))();
var storage = window.localStorage;
const __CIGOODS__ = 'CIGOODS';

class MobileStore extends Component{
  constructor(props) {
    super(props);
    // Get goods from local storage
    let oriGoods = storage.getItem(__CIGOODS__);
    if (oriGoods && oriGoods.length > 0) {
      oriGoods = JSON.parse(oriGoods);
    } else {
      oriGoods = [];
    }

    this.state = {
      editState: false,
      goods: oriGoods
    }
    this.addItem = this.addItem.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.delSelected = this.delSelected.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.changeCount = this.changeCount.bind(this);
  }

  saveItem(goods){
    // save the new goods into local storage
    storage.setItem(__CIGOODS__, JSON.stringify(goods));
  }


  addItem(item) {
    let count = 1;
    let aggregate = item.price-0;
    let newItem = Object.assign({}, item,  {id: G.generate(5), count, aggregate});
    const newGoods = this.state.goods.concat(newItem);
    this.setState({
        goods: newGoods
    });
    this.saveItem(newGoods);
  }

  delSelected() {
    const newGoods = this.state.goods.filter(item=>{
      return !(item.checked===true);
    });
    this.setState({
      goods: newGoods
    });
    this.saveItem(newGoods);
  }

  selectItem(id, checked){
    const newItems = this.state.goods.map(item=>{
      if(item.id===id){
        item = Object.assign(item, {checked});
      }
      return item;
    });

    this.setState({
      goods: newItems
    });
  }

  changeCount(id, count){
    const newItems = this.state.goods.map(item=>{
      if(item.id===id){
        item.count = count;
        item.aggregate = item.count * item.price;
      }
      return item;
    });

    this.setState({
      goods: newItems
    });
  }

  toggleEdit() {
    this.setState(prevState=>({
        editState: !prevState.editState
    }));
  }

  render() {
    return (
      <div className='container'>
        <MobileForm addItem={this.addItem}/>
        <MobileList items={this.state.goods}
                    delItem={this.delItem}
                    editState={this.state.editState}
                    toggleEdit={this.toggleEdit}
                    selectItem={this.selectItem}
                    changeCount={this.changeCount}
                    delSelected={this.delSelected}/>
      </div>
    );
  }
}

// MobileStore.defaultProps = {
//   goods : [
//     {
//       id: 1,
//       name: 'iPod Touch',
//       price: 99.99
//     },
//     {
//       id: 2,
//       name: 'iPhone 5',
//       price: 399.99
//     },
//     {
//       id: 3,
//       name: 'Nexus 7',
//       price: 199.99
//     },
//     {
//       id: 4,
//       name: 'Mi 6',
//       price: 299.99
//     }
//   ]
// }

export default MobileStore;
