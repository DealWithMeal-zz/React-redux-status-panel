import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchAPIandDispatch(url) {
    console.log('home.jsx');
    this.props.refreshAPI({response: 'a response'});
  }

  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <button onClick={() => this.fetchAPIandDispatch('testurl')}>Fetch API</button>
      </div>
    )
  }
}

export default Home;
