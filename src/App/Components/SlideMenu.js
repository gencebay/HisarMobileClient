import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  Platform
} from "react-native";

import ScalableText from "react-native-text";
import { Icon } from "react-native-elements";
import { CardSection } from "./Common";

class SlideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: ""
    };
  }

  render() {
    function icon(index) {
      if (index == 0) {
        return <Icon type="font-awesome" color="#fff" name="bars" />;
      } else if (index == 1) {
        return (
          <Icon
            style={{ paddingLeft: 10 }}
            type="font-awesome"
            color="#fff"
            name="bolt"
          />
        );
      }
    }

    this.props.navigation.state.routes.map((route, index) => {
      console.log("Route:", route);
    });

    return (
      <View style={styles.content}>
        <CardSection>
          <Icon type="font-awesome" name="home" />
          <Text style={styles.titleStyle}>Ana Sayfa</Text>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  menuImg: {
    position: "relative",
    width: null,
    height: 150
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#2a3540"
  },
  btnBox: {
    flexDirection: "row"
  },
  btnIcon: {
    height: 16,
    width: 16
  },
  btnTxt: {
    paddingLeft: 20,
    color: "#fff",
    fontSize: 16,
    lineHeight: 17
  },
  btnTxtActive: {
    color: "#f94057"
  }
});

export default SlideMenu;
