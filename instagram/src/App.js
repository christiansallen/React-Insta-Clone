import React, { Component } from "react";
import "./App.css";
import PostContainer from "./componenets/PostContainer/PostContainer";
import SearchBar from "./componenets/SearchBar/SearchBar";
import dummyData from "./dummy-data";
import PropTypes from "prop-types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData} />
      </div>
    );
  }
}

App.PropTypes = {
  dummyData: PropTypes.object
};

export default App;
