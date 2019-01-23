import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import { Icon, Card } from "react-native-elements";
import { Avatar } from "react-native-elements";

import { Colors as clrs } from "../Components/Common/Colors";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <Avatar
            large
            rounded
            source={require("../../../assets/img/logo.png")}
            containerStyle={{ margin: 10 }}
            activeOpacity={0.7}
          />
          <Text style={styles.heading}>User name</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerStyle: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 18
  },
  hero: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "rgba(0,0,0,0.3)"
  }
});

ProfileScreen.navigationOptions = {
  drawerLabel: "Profile",
  drawerIcon: ({ tintColor }) =>
    <Icon type="font-awesome" name="user" color={tintColor} />
};

export default connect()(ProfileScreen);
