import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAPIDatadog } from "../actions/datadogActions";

class Datadoghq extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAPIDatadog }, dispatch);
}

export default connect(null, mapDispatchToProps)(Datadoghq);
