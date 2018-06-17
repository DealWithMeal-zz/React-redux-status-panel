import React from 'react';

class AlertEngine extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchAPI() {
    console.log('Event Pipeline');
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <span>name: <b>{this.props.component.keyValue}</b></span><br/>
        <button onClick={() => this.fetchAPI()}>Update status</button>
      </div>
    )
  }
}

export default AlertEngine;
