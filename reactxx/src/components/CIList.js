import React, { Component } from 'react';
var G = new (require("generate-id"))();


class CIList extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      price: "",
      goods: []
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
    const item = {
      name: this.state.name,
      price: this.state.price
    }
    this.setState((prevState) => ({
      name: "",
      price: "",
      goods: prevState.goods.concat(item)
    }));
    console.log(this.state.goods);
  }

  render(){
    return(
      <div>
        <label>
          Name:
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Pirce:
          <input type='number' name='price' value={this.state.price} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          {this.state.goods.map((item)=>
            <li key={G.generate(5)}><span>name:{item.name}</span>&nbsp;<span>price:{item.price}</span></li>
          )}
        </ul>
      </div>
    );
  }
}

export default CIList;
