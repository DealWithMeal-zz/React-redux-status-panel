import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAPIDatadog } from "../actions/datadogActions";

class Datadoghq extends React.Component {
  constructor(props) {
    super(props);
  }

  //props.serviceStatus should contain array of components
  render() {
    return (
      <div className="status-component">
      <h3>Status of selected services from Datadoghq:</h3>
        {
          this.props.serviceStatus.components.map(function(item) { return (
            <div className="status-panel" key={item.name} data-status={item.status}>
              <div className="status-panel__name">{item.name}</div>
              <div className="status-panel__status">{'Current status: ' + item.status}</div>
            </div>
            )
          })
        }
      </div>
    );
  }
}

export default Datadoghq;
