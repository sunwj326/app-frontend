import React, { Component } from 'react';

class DraftBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
    // sync the scope of this
    this.consume = this.consume.bind(this);
  }

  consume(event){
    // update the state of this
    this.setState({
      text: event.target.value
    });
  }

  render(){
    return (
      <div>
        {/* call consume when input */}
        <input name="producer" onChange={this.consume} value={null} />
        <span>{this.state.text}</span>
      </div>
    );
  }
}


export default DraftBox;
