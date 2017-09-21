import React, { Component } from 'react';
import './App.css';
import FollowersList from 'followersList.js';
import SearchBox from 'searchbox.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBox/>
        <FollowesList/>
      </div>
    );
  }
}

export default App;
