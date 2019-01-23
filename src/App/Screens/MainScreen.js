import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
} from "react-native";

import { Icon} from "react-native-elements";
import LayoutScreen from "./LayoutScreen";
import { mainDataFetch, onAlbumSelect } from "../../Build/Actions";
import {
  AlbumFlatListWrapper,
  AlbumFlatList
} from "../Components/AlbumFlatList";

class MainScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.mainDataFetch();
  }

  onPressItem = album => {
    this.props.onAlbumSelect(album);
  };

  render() {
    const { navigation, data, selectedAlbum } = this.props;

    if (data) {
      return (
        <LayoutScreen navigation={navigation} selectedAlbum={selectedAlbum}>
          <View style={{ flex: 1, marginTop: 15 }}>
            <AlbumFlatListWrapper data={data} onPressItem={this.onPressItem} />
          </View>
        </LayoutScreen>
      );
    } else {
      return (
        <LayoutScreen navigation={navigation} selectedAlbum={selectedAlbum}>
          <View style={{ flex: 1 }}>
            <Text>Empty</Text>
          </View>
        </LayoutScreen>
      );
    }
  }
}

MainScreen.navigationOptions = {
  header: null,
  drawerLabel: "Home",
  tabBarLabel: "Home",
  tabBarIcon: ({ tintColor }) => (
    <Icon type="material-community" name="home" color={tintColor} />
  ),
  drawerIcon: ({ tintColor }) => (
    <Icon type="material-community" name="home" color={tintColor} />
  )
};

const mapStateToProps = state => {
  console.log("Main Screen map state:", state);
  return state.main;
};

export default connect(mapStateToProps, { mainDataFetch, onAlbumSelect })(
  MainScreen
);
