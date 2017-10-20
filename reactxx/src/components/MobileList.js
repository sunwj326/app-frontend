import React, {Component} from 'react';
import { Table, Button } from 'react-bootstrap';
import MobileItem from './MobileItem'

class MobileList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }

  render() {
    const items = this.props.items;

    const isItemSelect = items.some(item => {
      return item.checked === true;
    });

    const total = items.map(item => item.aggregate - 0).reduce((sum, cur) => {
      return sum + cur;
    }, 0);

    const itemlist = items.map(item=>
      <MobileItem key={item.id}
                  data={item}
                  delItem={this.props.delItem}
                  editState={this.props.editState}
                  selectItem={this.props.selectItem}
                  changeCount={this.props.changeCount}/>
    );

    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Count</th>
            <th>Price</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colSpan="3">
              <Button disabled={this.props.editState} onClick={this.props.toggleEdit}>Edit</Button>{' '}
              <Button disabled={!this.props.editState || !isItemSelect} onClick={this.props.delSelected}>Delete</Button>{' '}
              <Button disabled={!this.props.editState} onClick={this.props.toggleEdit}>Complete</Button>
            </td>
            <td>Summary:{total}</td>
          </tr>
        </tfoot>
        <tbody>
          {itemlist}
        </tbody>
      </Table>
    );
  }
}

export default MobileList;
