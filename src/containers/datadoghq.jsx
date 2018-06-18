import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAPIDatadog } from "../actions/datadogActions";

class Datadoghq extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAPIDatadog();
  }

  render() {
    return (
      <div>
        <div className="status-panel">
          <div className="status-panel__name">{this.props.serviceStatus.components[0].keyValue}</div>
          <div className="status-panel__status">{'Current status: ' + this.props.serviceStatus.components[0].status}</div>
        </div>
        <div className="status-panel">
          <div className="status-panel__name">{this.props.serviceStatus.components[1].keyValue}</div>
          <div className="status-panel__status">{'Current status: ' + this.props.serviceStatus.components[1].status}</div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAPIDatadog }, dispatch);
}

export default connect(null, mapDispatchToProps)(Datadoghq);
