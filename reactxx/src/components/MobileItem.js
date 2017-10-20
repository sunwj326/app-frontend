import React, {Component} from 'react';
import { Checkbox, FormControl } from 'react-bootstrap';

class MobileItem extends Component {

  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCount = this.handleCount.bind(this);
  }

  handleSelect(event){
    const id = this.props.data.id;
    this.props.selectItem(id, event.target.checked);
  }

  handleCount(event){
    const id = this.props.data.id;
    let count = event.target.value;
    count = (count >= 1) ? count : 1;
    this.props.changeCount(id, count);
  }

  render() {
    let {name, count, aggregate} = this.props.data;
    return(
      <tr>
        <td><Checkbox disabled={!this.props.editState} onChange={this.handleSelect}></Checkbox></td>
        <td>{name}</td>
        <td><FormControl type="number" value={count} onChange={this.handleCount}/></td>
        <td>{aggregate}</td>
      </tr>
    );
  }
}

export default MobileItem;
