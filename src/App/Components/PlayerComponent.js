import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform,
  Text
} from "react-native";

import ScalableText from "react-native-text";
import { Avatar, Icon } from "react-native-elements";
import Colors from "./Common/Colors";

class PlayerComponent extends Component {
  constructor(props) {
    super(props);
  }

  onPlayPress() {}

  render() {
    const { album } = this.props;
    return (
      <View style={styles.playerView}>
        <TouchableOpacity style={{ alignSelf: "center" }}>
          <Icon
            containerStyle={{ marginLeft: 5 }}
            type="material-community"
            name="chevron-up"
            color={Colors.antiFlashWhite}
          />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            alignSelf: "center",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 13,
            color: "#ccc"
          }}
        >
          {album.title}
        </Text>
        <TouchableOpacity
          onPress={this.onPlayPress}
          style={{ alignSelf: "center" }}
        >
          <Avatar
            small
            rounded
            containerStyle={{ marginTop: 6 }}
            overlayContainerStyle={{
              width: 24,
              height: 24,
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: Colors.antiFlashWhite
            }}
            icon={{ type: "material-community", name: "play" }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "stretch",
    height: 40,
    backgroundColor: Colors.tabNavBackground
  }
});

export default PlayerComponent;
