import React, { Component } from "react";
import "../login.css";
import Sign from "./Sign";
import SignExpanded from "./SignExpanded";
import SignCollapsed from "./SignCollapsed";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wasClickedLeft: false,
      wasClickedRight: false,
    };
  }

  onReset = () => {
    this.setState({
      wasClickedLeft: false,
      wasClickedRight: false,
    });
  };

  onClickLeft = () => {
    this.setState({ wasClickedLeft: !this.state.wasClickedLeft }, function () {
      if (
        this.state.wasClickedRight === true &&
        this.state.wasClickedLeft === true
      ) {
        this.setState({ wasClickedRight: false });
      }
    });
  };

  onClickRight = () => {
    this.setState(
      { wasClickedRight: !this.state.wasClickedRight },
      function () {
        if (
          this.state.wasClickedRight === true &&
          this.state.wasClickedLeft === true
        ) {
          this.setState({ wasClickedLeft: false });
        }
      },
    );
  };

  render() {
    let modalContent = null;

    if (
      this.state.wasClickedLeft === false &&
      this.state.wasClickedRight === false
    ) {
      modalContent = (
        <div className="Modal">
          <Sign type="signUp" onChange={this.onClickLeft}></Sign>
          <Sign type="signIn" onChange={this.onClickRight}></Sign>
        </div>
      );
    } else if (
      this.state.wasClickedLeft === false &&
      this.state.wasClickedRight === true
    ) {
      modalContent = (
        <div className="Modal">
          <SignCollapsed
            type="signUp"
            onChange={this.onClickLeft}
          ></SignCollapsed>
          <SignExpanded type="signIn"></SignExpanded>
        </div>
      );
    } else if (
      this.state.wasClickedLeft === true &&
      this.state.wasClickedRight === false
    ) {
      modalContent = (
        <div className="Modal">
          <SignExpanded type="signUp"></SignExpanded>
          <SignCollapsed
            type="signIn"
            onChange={this.onClickRight}
          ></SignCollapsed>
        </div>
      );
    }

    return <div className="Modal">{modalContent}</div>;
  }
}