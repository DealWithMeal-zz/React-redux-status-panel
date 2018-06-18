import React from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import Datadoghq from './containers/datadoghq';
import { fetchAPIDatadog, API_URL } from './actions/datadogActions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDatadog();
  }

  render() {
    return (
      <main className="container">
        <Datadoghq serviceStatus={this.props.services[0]}/>
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
          console.log('app.jsx fetchAPIDatadog');
          axios.get(API_URL).then(function(response) {
            dispatch(fetchAPIDatadog(response));
          });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
