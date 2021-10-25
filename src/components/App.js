import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header dark={true} className="justify-content-center">
          CESA VIT
        </Header>
      </div>
    );
  }
}

export default App;
