import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Alert,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { DrawerItems } from "react-navigation";
import { Avatar, Icon } from "react-native-elements";
import { userSignOut } from "../../Build/Actions";
import Colors from "./Common/Colors";
import NavigationService from "../../NavigationService";

class CustomDrawerContentComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, data } = this.props;
    var nameIdentifier = data.nameIdentifier || "";
    var gravatar = data.gravatar;

    return (
      <ImageBackground style={styles.backgroundImage}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.hero}>
              <Avatar
                large
                rounded
                containerStyle={{ margin: 10 }}
                activeOpacity={0.7}
                source={{ uri: gravatar }}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={styles.heading}>{nameIdentifier}</Text>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      "Log out",
                      "Are you sure you want to logout?",
                      [
                        {
                          text: "Yes",
                          onPress: () => NavigationService.navigate("Welcome")
                        },
                        {
                          text: "Cancel",
                          style: "cancel"
                        }
                      ],
                      { cancelable: true }
                    );
                  }}
                >
                  <Icon
                    type="font-awesome"
                    name="sign-out"
                    size={25}
                    color={Colors.antiFlashWhite}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* <DrawerItems {...this.props} /> */}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

CustomDrawerContentComponent.navigationOptions = {
  header: null,
  drawerLabel: "Menu"
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "#1C1C1C"
  },
  heading: {
    color: Colors.antiFlashWhite,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "bold"
  },
  hero: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "rgba(0,0,0,0.3)"
  }
});

const mapStateToProps = state => {
  return state.user;
};

export default connect(mapStateToProps, { userSignOut })(
  CustomDrawerContentComponent
);
