import React from 'react';
import { connect } from 'react-redux';
import Datadoghq from './containers/datadoghq';
import { fetchAPIDatadog } from './actions/datadogActions';

class App extends React.Component {
  constructor(props) {
    super(props);
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
        fetchAPIDatadog: () => {
          console.log('app.jsx fetchAPIDatadog');
          dispatch(fetchAPIDatadog());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
