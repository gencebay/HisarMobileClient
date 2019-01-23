import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  RefreshControl,
  ImageBackground
} from "react-native";

import { connect } from "react-redux";
import { Icon } from "react-native-elements";
import Header from "../Components/Header";
import Colors from "../Components/Common/Colors";
import PlayerComponent from "../Components/PlayerComponent";
import { mainDataFetch } from "../../Build/Actions";

class LayoutScreen extends Component {
  constructor(props) {
    super(props);
  }

  refreshControl() {
    return (
      <RefreshControl refreshing={false} onRefresh={() => this.onRefresh()} />
    );
  }

  renderPlayer(route, album) {
    if (route == "Home") {
      return <PlayerComponent album={album} />;
    }
  }

  onRefresh() {
    this.setState({ refreshing: true });
    this.props.mainDataFetch();
  }

  render() {
    const { navigation, selectedAlbum, user } = this.props;
    const route = navigation.state.routeName;
    const gravatar = user.data.gravatar;
    return (
      <View style={styles.mainBackground}>
        <View style={{ flex: 1 }}>
          <Header navigation={navigation} gravatar={gravatar} />
          <StatusBar barStyle="light-content" backgroundColor={"#394a59"} />
          <ScrollView
            style={{ flex: 1 }}
            refreshControl={this.refreshControl()}
          >
            {this.props.children}
          </ScrollView>
          {this.renderPlayer(route, selectedAlbum)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: Colors.primary3
  }
});

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { mainDataFetch })(LayoutScreen);
