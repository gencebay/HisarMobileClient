import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "react-native-elements";

let styles = {};

const HorizontalSpacer = () => <View style={styles.container} />;

styles = StyleSheet.create({
  container: {
    marginRight: 25
  }
});

export { HorizontalSpacer };
