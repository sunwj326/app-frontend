import React, { Component } from 'react';

const style = {
  textAlign: 'center'
}

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    // set the timer after the clock is mounted
    this.timerID = setInterval(()=>this.tick(),1000);
  }

  tick(){
    // update the date
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount(){
    // clear the timer before the clock is destroied
    clearInterval(this.timerID);
  }

  render(){
    return(
      <div style={style}>
        <h1>The Clock is :</h1>
        {/* format date as locale string */}
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
