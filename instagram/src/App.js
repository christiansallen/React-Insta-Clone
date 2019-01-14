import React, { Component } from "react";
import "./App.css";
import PostContainer from "./componenets/PostContainer/PostContainer";
import SearchBar from "./componenets/SearchBar/SearchBar";
import dummyData from "./dummy-data";

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

export default App;
