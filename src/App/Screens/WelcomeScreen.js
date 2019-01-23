import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image
} from "react-native";

import Video from "react-native-video";
import { Button, Icon } from "react-native-elements";
import _ from "lodash";

import Colors from "../Components/Common/Colors";
import { Spacer } from "../Components/Common/index";
import { Factory } from "../../Build/Factory";
import NavigationService from "../../NavigationService";

const footageUri = Factory.getDefaultMainUrl() + "video/footage.mp4";

class WelcomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Video
          source={{ uri: footageUri }}
          muted={true}
          rate={0.8}
          resizeMode={"cover"}
          repeat
          style={styles.video}
        />
        <View style={styles.headerStyle}>
          <Icon
            type="material-community"
            name="radio"
            size={55}
            color={Colors.white}
          />
          <Text style={styles.appTitle}>My Radio</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionInner}>
            <Text
              style={{ color: Colors.white, fontSize: 16, fontWeight: "bold" }}
            >
              Welcome
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 13,
                color: "#ccc",
                marginTop: 10
              }}
            >
              Sign up for free music on your phone, tablet and computer.
            </Text>
          </View>
          <View
            style={{
              marginTop: 90,
              width: null,
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <Button
              title="CREATE ACCOUNT"
              onPress={() => NavigationService.navigate("CreateAccount")}
              textStyle={{
                fontSize: 12,
                fontWeight: "bold"
              }}
              buttonStyle={styles.signUpBtn}
            />
            <Spacer />
            <Text
              style={{
                textAlign: "center",
                fontSize: 10,
                fontWeight: "bold",
                color: "#ccc"
              }}
            >
              Already a user?
            </Text>
            <Spacer />
            <Button
              title="LOG IN"
              onPress={() => NavigationService.navigate("LogIn")}
              buttonStyle={styles.loginSubmitBtn}
              textStyle={{ color: "black", fontSize: 12, fontWeight: "bold" }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

WelcomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary3
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  headerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  signUpBtn: {
    marginTop: 15,
    height: 38,
    borderRadius: 30,
    backgroundColor: "#2fd566"
  },
  section: {
    flex: 2,
    padding: 10
  },
  sectionInner: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  loginContainer: {},
  loginSubmitBtn: {
    height: 38,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white
  },
  signUpBtn: {
    marginTop: 15,
    height: 38,
    borderRadius: 30,
    backgroundColor: "#02b875"
  },
  appTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 5
  }
});

export default WelcomeScreen;
