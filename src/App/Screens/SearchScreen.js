import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

import { Icon } from "react-native-elements";
import Header from "../Components/Header";
import LayoutScreen from "./LayoutScreen";
import Colors from "../Components/Common/Colors";

class SearchScreen extends Component {
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

SearchScreen.navigationOptions = {
  header: null,
  drawerLabel: "Search",
  tabBarLabel: "Search",
  tabBarIcon: ({ tintColor }) => (
    <Icon type="material-community" name="magnify" color={tintColor} />
  ),
  drawerIcon: ({ tintColor }) => (
    <Icon type="material-community" name="magnify" color={tintColor} />
  )
};

export default connect()(SearchScreen);
