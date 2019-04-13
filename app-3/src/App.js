import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      filterString: "",
      colorList: ["blue", "green", "yellow", "purple", "red"]
    };
  }
  handleChange(filter){
    this.setState({filterString: filter});
  }
  render() {

    let colorFlash = this.state.colorList.filter((element, index)=>{
      return element.includes(this.state.filterString);
    }).map((element, index)=>{
      return <h3 key={index}>{element}</h3>
    });
    return <div>
<h1 className="h1">This is App #3</h1>;
<h2 className="h2">These are my favorite colors!</h2>    
    <div className="App">
    <input onChange={e => this.handleChange(e.target.value)} type="text"/>
    {colorFlash}
    </div>
    </div>
  }
}

export default App;

//return can only render 1 element
//Extends Component is linked to the constructor() and super() functions
//Promise is an asyncronus function call. So while trying to get ahold of freind, when you call or send a text, you just sit and wait. So instead of sitting and doing nothing while you wait, you complete other tasks while waiting for the response. (out of sync of other calls, promise is syncing while other tasks are syncing)
//callbacks are similar to promises
//console.log(1)
/*setTimeout(()=>{
  console.log(2) - will not render until after the other two, as it is a promise or asyncronus call (call stack - order of operations)
}, 0) - even though the time is set to zero, it is still not within the first or basic order of operations
*/
//console.log(3)
//Can call new promises
//Promise Video in Slack
