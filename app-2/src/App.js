import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      colorList: ["blue", "green", "yellow", "purple", "red"]
    };
  }
  render() {

    let colorFlash = this.state.colorList.map((element, index)=>{
      return <h3 key={index}>{element}</h3>
    })
    return <div>
<h1 className="h1">This is App #2</h1>;
<h2 className="h2">These are my favorite colors!</h2>    
    <div className="App">{colorFlash}</div>
    </div>
  }
}

export default App;
