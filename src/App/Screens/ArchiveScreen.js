import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground
} from "react-native";

import { Icon } from "react-native-elements";
import Header from "../Components/Header";
import LayoutScreen from "./LayoutScreen";
import Colors from "../Components/Common/Colors";

class ArchiveScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <LayoutScreen navigation={navigation}>
        <View style={{ flex: 1 }}>
          <Text>Empty</Text>
        </View>
      </LayoutScreen>
    );
  }
}

ArchiveScreen.navigationOptions = {
  header: null,
  drawerLabel: "Archive",
  tabBarLabel: "Archive",
  tabBarIcon: ({ tintColor }) => (
    <Icon type="material-community" name="library-books" color={tintColor} />
  ),
  drawerIcon: ({ tintColor }) => (
    <Icon type="material-community" name="library-books" color={tintColor} />
  )
};

export default connect()(ArchiveScreen);
