import React, { Component } from "react";

class App extends Component {
  state = {
    Who: "CESA VIT"
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.Who}</h1>
        <p>
          Hey folks, this webinar is brought to you by {this.state.Who}. Thanks
          a lot.
        </p>
      </div>
    );
  }
}

export default App;
