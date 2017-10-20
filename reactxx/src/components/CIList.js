import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
var G = new (require("generate-id"))();
var storage = window.localStorage;
const __CIGOODS__ = 'CIGOODS';

class CIList extends Component {
  constructor(props){
    super(props);
    // Get goods from local storage
    let oriGoods = storage.getItem(__CIGOODS__);
    if(oriGoods && oriGoods.length > 0){
      oriGoods = JSON.parse(oriGoods);
    }else{
      oriGoods = [];
    }

    this.state = {
      name: "",
      price: "",
      goods:  oriGoods
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

    //console.log('this.state.name:'+ this.state.name);
    //console.log('this.state.price:'+ this.state.price);
  }

  handleSubmit(){
    let item = {
      name: this.state.name,
      price: this.state.price,
      id: G.generate(5)
    }
    this.setState((prevState) => {
      const newGoods = prevState.goods.concat(item);
      // save the new goods into local storage
      storage.setItem(__CIGOODS__, JSON.stringify(newGoods));
      return{
        name: "",
        price: "",
        goods: newGoods
      }
    });
  }

  render(){
    return(
      <div>
        <form className='form-inline'>
          <div className='form-group'>
            <label for='itemName'>Name</label>
            <input type='text' name='name' className="form-control" id='itemName' value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label for='itemPrice'>Pirce</label>
            <input type='number' name='price' className="form-control" id='itemPrice' value={this.state.price} onChange={this.handleChange} />
          </div>
          <button onClick={this.handleSubmit} className='btn btn-default'>Submit</button>
        </form>
        {/* <ul>
          {this.state.goods.map((item)=>
            <li key={item.id}><span>id:{item.id}</span><span>name:{item.name}</span>&nbsp;<span>price:{item.price}</span></li>
          )}
        </ul> */}
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {this.state.goods.map((item)=>
            // <li key={item.id}><span>id:{item.id}</span><span>name:{item.name}</span>&nbsp;<span>price:{item.price}</span></li>
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CIList;
