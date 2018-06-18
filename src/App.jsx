import React from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import Datadoghq from './containers/datadoghq';
import { fetchAPIDatadog, DATADOG_API_URL } from './actions/datadogActions';

const REFRESH_TIMEOUT = 10*60*1000; // 10 mins in ms

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDatadog();

    setInterval(() => {
      this.props.fetchDatadog();
    }, REFRESH_TIMEOUT);
  }

  //for each view component like Datadoghq do pre-filtering by service name and only send array of components
  render() {
    return (
      <main className="container">
        <h2>Simple, extendable react site gathering statuses for few different services.</h2>
        <Datadoghq serviceStatus={this.props.services.find(service => service.name === 'datadoghq')}/>
      </main>
    )
  }
}

function mapStateToProps(state) {
    return {
        services : state.rootReducer.services,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchDatadog: () => {
          //do assync calls (and format convertions, if needed) here and dispatch action in a sync manner
          axios.get(DATADOG_API_URL).then(function(response) {
            dispatch(fetchAPIDatadog(response));
          });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
