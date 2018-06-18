import React from 'react';

class DatagodhqComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchAPI() {
    console.log('Component: ' + this.props.component.keyValue + ' has started fetching');
    this.doFetch().then(response => response.json()).then((response) => {
        this.props.onClick(response);
    });
  }

  doFetch() {
    return fetch(this.props.apiUrl, {
    	method: 'get'
    });
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

export default DatagodhqComponent;
