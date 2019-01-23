import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar
} from "react-native";
import { connect } from "react-redux";
import { Button, Icon, SocialIcon } from "react-native-elements";
import { loginUser } from "../../Build/Actions";
import _ from "lodash";

import {
  InputGroup,
  Spacer,
  Spinner
} from "../Components/Common/";
import Colors from "../Components/Common/Colors";
import NavigationService from "../../NavigationService";

class CreateAccountScreen extends Component {
  static navigationOptions = {
    title: "Create Account",
    headerTintColor: Colors.white,
    headerStyle: {
      backgroundColor: Colors.headerColor,
      elevation: null
    },
    headerTitleStyle: {
      fontSize: 14,
      fontWeight: "bold"
    }
  };

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        onPress={this.handleLoginSubmit}
        title="Sign Up"
        textStyle={{
          fontSize: 13,
          fontWeight: "bold"
        }}
        buttonStyle={styles.signUpBtn}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.formSection}>
          <View style={styles.formSectionInner}>
            <View style={styles.loginContainer}>
              <InputGroup
                iconName="user-o"
                placeholder="Username"
                value={this.state.form.username}
                onChangeText={value => this.updateForm("username", value)}
              />
              <Spacer />
              <InputGroup
                iconName="envelope"
                keyboardType="email-address"
                placeholder="Email"
                value={this.state.form.username}
                onChangeText={value => this.updateForm("email", value)}
              />
              <Spacer />
              <InputGroup
                secureTextEntry
                iconName="lock"
                placeholder="Password"
                value={this.state.form.password}
                onChangeText={value => this.updateForm("password", value)}
              />
              <Spacer />
              <InputGroup
                secureTextEntry
                iconName="lock"
                placeholder="Password Confirm"
                value={this.state.form.password}
                onChangeText={value =>
                  this.updateForm("passwordConfirm", value)
                }
              />
              <View style={{ paddingLeft: 35, paddingRight: 35 }}>
                {this.renderButton()}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: null,
        email: null,
        password: null,
        passwordConfirm: null
      }
    };

    this.updateForm = this.updateForm.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit() {
    let username = this.state.username;
    let password = this.state.password;
    this.props.loginUser(username, password);
  }

  updateForm(field, value) {
    this.setState({ [`${field}`]: value });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary3
  },
  headerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  formSection: {
    flex: 2,
    padding: 10
  },
  formSectionInner: {
    padding: 20
  },
  loginContainer: {},
  loginSubmitBtn: {
    marginTop: 15,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.sunsetOrange
  },
  signUpBtn: {
    marginTop: 15,
    height: 38,
    borderRadius: 30,
    backgroundColor: "#02b875"
  },
  faceBtn: {
    marginTop: 15,
    height: 38,
    borderRadius: 30,
    backgroundColor: Colors.faceBlue
  },
  appTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    fontStyle: "italic"
  }
});

const mapStateToProps = ({ user }) => {
  if (user.data && user.data.token) {
    const state = { signedIn: true, token: user.data.token };
    NavigationService.navigate("App");
    return state;
  }
  return user;
};

export default connect(mapStateToProps, {
  loginUser
})(CreateAccountScreen);
