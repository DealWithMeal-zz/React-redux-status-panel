import React from 'react';
import { connect } from 'react-redux';
import Home from './containers/Home';
import { refreshAPIStatus } from './actions/index';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="container">
        <Home refreshAPI={this.props.onRefreshAPIClick} apiStatus={this.props.apiStatus}/>
      </main>
    )
  }
}

function mapStateToProps(state) {
    return {
        apiStatus : state.rootReducer.status,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onRefreshAPIClick: (response) => {
          console.log('app.jsx refreshAPI : ' + response);
          dispatch(refreshAPIStatus(response));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
