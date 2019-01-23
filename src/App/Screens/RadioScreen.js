import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

import { Icon } from "react-native-elements";
import Header from "../Components/Header";
import LayoutScreen from "./LayoutScreen";
import Colors from "../Components/Common/Colors";

class RadioScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <LayoutScreen navigation={navigation}>
        <View style={{ flex: 1 }}>
          <Text>Browse</Text>
        </View>
      </LayoutScreen>
    );
  }
}

RadioScreen.navigationOptions = {
  header: null,
  drawerLabel: "Radio",
  tabBarLabel: "Radio",
  tabBarIcon: ({ tintColor }) => (
    <Icon type="material-community" name="radio" color={tintColor} />
  ),
  drawerIcon: ({ tintColor }) => (
    <Icon type="material-community" name="radio" color={tintColor} />
  )
};

export default connect()(RadioScreen);
