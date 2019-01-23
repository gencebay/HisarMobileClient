import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform
} from "react-native";

import ScalableText from "react-native-text";
import { Avatar, Icon } from "react-native-elements";
import Colors from "./Common/Colors";
import NavigationService from "../../NavigationService";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, gravatar } = this.props;

    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity onPress={() => NavigationService.openDrawer()}>
          <Avatar
            width={24}
            height={24}
            rounded
            containerStyle={{ paddingLeft: 10 }}
            activeOpacity={0.7}
            source={{ uri: gravatar }}
          />
        </TouchableOpacity>
        <ScalableText style={styles.title}>
          {navigation.state.routeName}
        </ScalableText>
        <Image style={{ paddingRight: 40 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: Colors.headerColor,
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    flexDirection: "row",
    position: "relative",
    zIndex: 100
  },
  title: {
    color: "#fff",
    marginLeft: 10,
    marginTop: 3,
    fontWeight: "bold",
    fontSize: 14
  }
});

export default Header;
