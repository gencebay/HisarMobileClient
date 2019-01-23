import React, { Component } from "react";
import { Platform } from "react-native";

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import LoginScreen from "./App/Screens/LoginScreen";
import MainScreen from "./App/Screens/MainScreen";
import WelcomeScreen from "./App/Screens/WelcomeScreen";
import CustomDrawerContentComponent from "./App/Components/CustomDrawerContentComponent";
import Colors from "./App/Components/Common/Colors";
import BrowseScreen from "./App/Screens/BrowseScreen";
import SearchScreen from "./App/Screens/SearchScreen";
import RadioScreen from "./App/Screens/RadioScreen";
import ArchiveScreen from "./App/Screens/ArchiveScreen";
import CreateAccountScreen from "./App/Screens/CreateAccountScreen";
import NavigationService from "./NavigationService";

const AppInNav = createBottomTabNavigator(
  {
    Home: { screen: MainScreen },
    Browse: { screen: BrowseScreen },
    Search: { screen: SearchScreen },
    Radio: { screen: RadioScreen },
    Archive: { screen: ArchiveScreen }
  },
  {
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: "#aaa",
      style: {
        height: 50,
        alignContent: "flex-start",
        backgroundColor: Colors.tabNavBackground,
        borderTopWidth: 0.6,
        borderTopColor: "#181818"
      }
    }
  }
);

const DrawerNav = createDrawerNavigator(
  {
    Home: AppInNav
  },
  {
    contentComponent: CustomDrawerContentComponent,
    drawerWidth: 300,
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    }
  }
);

const SignedOut = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen
    },
    LogIn: {
      screen: LoginScreen
    },
    CreateAccount: {
      screen: CreateAccountScreen
    }
  },
  { headerMode: "screen" }
);

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      App: DrawerNav,
      Aut: SignedOut
    },
    {
      headerMode: "none",
      mode: Platform.OS === "ios" ? "modal" : "card",
      initialRouteName: "Aut"
    }
  )
);

class AppNavigation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default AppNavigation;
