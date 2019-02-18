import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Button } from "react-native-elements";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "hey",
      headerRight: (
        <Button
          style={{
            marginRight: 15,
            marginTop: Platform.OS === "android" ? 24 : 0
          }}
          title="Settings"
          buttonStyle={{
            backgroundColor: "rgba(0,0,0,0)"
          }}
          titleStyle={{ color: "rgba(0, 122, 255, 1)" }}
          onPress={() => navigation.navigate("settings")}
        />
      )
    };
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
