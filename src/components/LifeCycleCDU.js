import React, { Component } from "react";
import LifeCycleCDUChild from "./LifeCycleCDUChild";

export class LifeCycleCDU extends Component {
  constructor(props) {
    console.log("Constructor called!")
    super(props);

    this.state = {
      greeting: "Hello!",
    };
  }

  updateGreeting = () => {
    console.log("Update greeting called!");
    this.setState(prevState => {
        return {
            greeting: prevState.greeting === "Hello" ? "Goodbye" : "Hello",
        }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated!");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.parentGreeting !== this.props.parentGreeting){
        console.log("Parent greeting has changed!");
    }
  }

  render() {
    console.log("Render method called!");
    return (
        <div>
            <h1>{this.state.greeting}</h1>
            <button onClick={this.updateGreeting}>Update greeting</button>
            <LifeCycleCDUChild parentGreeting = {this.state.greeting}/>
        </div>    
    )
  }
}

export default LifeCycleCDU;
