import React from 'react';
import DatagodhqComponent from './datagodhqComponent';

class Datadoghq extends React.Component {
  constructor(props) {
    super(props);
  }

  dispatchAPIUpdate(data) {
    debugger;
    console.log('datadoghq.jsx');
    this.props.dispatchUpdate({});
  }

  render() {
    return (
      <div>
        <DatagodhqComponent
          onClick={this.dispatchAPIUpdate}
          apiUrl={this.props.apiStatus.API}
          component={this.props.apiStatus.components[0]}>
          Alert Engine
        </DatagodhqComponent>

        <br/><br/>

        <DatagodhqComponent
          onClick={this.dispatchAPIUpdate}
          apiUrl={this.props.apiStatus.API}
          component={this.props.apiStatus.components[1]}>
          Event Pipeline
        </DatagodhqComponent>
      </div>
    )
  }
}

export default Datadoghq;
