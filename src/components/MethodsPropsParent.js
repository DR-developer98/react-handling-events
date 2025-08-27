import React, { Component } from "react";
import MethodsPropsChild from "./MethodsPropsChild";

export class MethodsPropsParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  handleSignInAndOut = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return <div>
        <MethodsPropsChild isLoggedIn={this.state.isLoggedIn} handleSignInAndOut = {this.handleSignInAndOut}/>
    </div>;
  }
} 

export default MethodsPropsParent;
