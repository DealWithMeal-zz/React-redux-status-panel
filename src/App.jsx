import React from 'react';
import { connect } from 'react-redux';
import Datadoghq from './containers/datadoghq';
import { refreshAPIStatus } from './actions/index';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="container">
        <Datadoghq refreshAPI={this.props.onRefreshAPIClick} apiStatus={this.props.services[0]}/>
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
        onRefreshAPIClick: (response) => {
          console.log('app.jsx refreshAPI object: ' + JSON.stringify(response));
          dispatch(refreshAPIStatus(response));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
