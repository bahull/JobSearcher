import React, { Component } from "react";
import { View, Text } from "react-native";

class ReviewScreen extends Component {
  static navigationOptions = {
    headerTitle: "hey",
    headerRight: <Text style={{ marginRight: 15 }}>Go Right</Text>
  };
  render() {
    return (
      <View>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
