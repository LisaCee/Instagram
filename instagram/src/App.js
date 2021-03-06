import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }
  render() {
    return (
      <div className="App">
      <SearchBar />
        {this.state.data.map((post, index) => {
          return(<PostContainer post={post} key={index}/>);
        })}
      </div>
    );
  }
}

export default App;
