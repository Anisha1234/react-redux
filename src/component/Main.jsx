import React from "react";
// import logo from "../logo.svg";
import "../App.css";

class Main extends React.Component {
  state = {
    location: "Red Hat",
    city: "Banglore"
  };
  changeLoc = () => {
    console.log("clicked");
  };
  handleMouse = e => {
    console.log(e.target, e.pageX);
  };
  handleCopy = e => {
    console.log("Try being original once");
  };
  render() {
    return (
      <div>
        <h1 className="App-link">We are here</h1>
        <div>
          location : {this.state.location} @{this.state.city}
          <br />
          <button onClick={this.changeLoc}>Click me</button>
          <button onMouseOver={this.handleMouse}>hover over</button>
          <p onCopy={this.handleCopy}>we think, we do</p>
        </div>
      </div>
    );
  }
}

export default Main;
