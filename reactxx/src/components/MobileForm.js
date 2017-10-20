import React, { Component } from 'react';
import { Form, Col, FormGroup, InputGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class MobileForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      price:""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.type==='checkbox'? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]:value
    })
  }

  handleValidation(){
    const price = this.state.price;
    if(price.length === 0){
      return null;
    }
    if(isNaN(Number.parseFloat(price))){
      return 'error';
    }
    return 'success';
  }

  handleSubmit(event){
    event.preventDefault();
  }

  addItem(event){
    if(event.type==='keyup'&&event.keyCode!==13){
      return false;
    }

    if(this.handleValidation()!=='success'){
      return false;
    }

    let name = this.state.name;
    let price = this.state.price;
    let item = {name, price};
    this.props.addItem(item);
    this.setState({
      name: "",
      price: ""
    })
  }

  render(){
    return(
      <Form horizontal onSubmit={this.handleSubmit} onKeyUp={this.addItem}>
        <FormGroup controlId="itemName">
          <Col componentClass={ControlLabel} sm={2}>Name</Col>
          <Col sm={8}>
            <FormControl type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup controlId="itemPrice'"
          validationState={this.handleValidation()}>
          <Col componentClass={ControlLabel} sm={2}>Price</Col>
          <Col sm={8}>
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type='text' name='price' min='0' value={this.state.price} onChange={this.handleChange} />
              <FormControl.Feedback />
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={8}>
            <Button type='submit' onClick={this.addItem}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>

            /**
       * Inline From
       *
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup controlId="itemName">
          <ControlLabel >Name:</ControlLabel>
          {' '}
          <FormControl type='text' ref='itemName' onKeyUp={this.add} />
        </FormGroup>
        {' '}
        <FormGroup controlId="itemPrice'">
          <ControlLabel >Pirce:</ControlLabel>
          {' '}
          <InputGroup>
            <FormControl type='text' ref='itemPrice' min='0' onKeyUp={this.add} />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {' '}
        <Button type='submit' onClick={this.add}>Submit</Button>
      </Form>
      */
    )
  }
}

export default MobileForm;
