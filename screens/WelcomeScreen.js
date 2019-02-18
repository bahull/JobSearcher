import React, { Component } from "react";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to JobApp", color: "#03A9F4" },
  { text: "Use this to get a job", color: "#009688" },
  { text: "Set your location, then swipe away", color: "#03A9F4" }
];

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  onSlidesComplete = () => {
    this.props.navigation.navigate("Auth");
  };

  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

export default WelcomeScreen;
