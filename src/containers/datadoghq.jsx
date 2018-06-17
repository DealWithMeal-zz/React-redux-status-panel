import React from 'react';
import AlertEngine from './alertEngine';
import EventPipeline from './eventPipeline';

class Datadoghq extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchAPIandDispatch(url) {
    console.log('datadoghq.jsx');
    this.props.refreshAPI({});
  }

  render() {
    return (
      <div>
        <AlertEngine
          onClick={() => this.fetchAPIandDispatch('testurl')}
          apiUrl={this.props.apiStatus.API}
          component={this.props.apiStatus.components[0]}>
          Alert Engine
        </AlertEngine>

        <br/><br/>

        <EventPipeline
          onClick={() => this.fetchAPIandDispatch('testurl')}
          apiUrl={this.props.apiStatus.API}
          component={this.props.apiStatus.components[1]}>
          Event Pipeline
        </EventPipeline>
      </div>
    )
  }
}

export default Datadoghq;
