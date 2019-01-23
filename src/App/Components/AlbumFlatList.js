import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  Platform
} from "react-native";
import { Spacer } from "./Common/";

class FlatListItem extends Component {
  _onPress = () => {
    this.props.onPressItem({
      id: this.props.id,
      title: this.props.title,
      artist: this.props.artist
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Image
            style={{ width: 150, height: 150 }}
            source={{ uri: this.props.url }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontSize: 13,
              fontWeight: "bold",
              color: "#fff",
              marginTop: 3
            }}
          >
            {this.props.title}
          </Text>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 11,
              fontWeight: "bold",
              color: "#ccc"
            }}
          >
            {this.props.artist}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class AlbumFlatList extends Component {
  state = { selected: new Map() };
  constructor(props) {
    super(props);
  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = album => {
    this.props.onPressItem(album);
  };

  _renderItem = ({ item }) => {
    return (
      <FlatListItem
        id={item.id}
        onPressItem={this._onPressItem}
        title={item.title}
        artist={item.artist}
        url={item.url}
      />
    );
  };

  _renderCategorySubTitle = text => {
    if (text) {
      return (
        <Text
          style={{
            alignSelf: "center",
            color: "#ccc",
            fontSize: 11,
            marginTop: 5,
            fontWeight: "bold"
          }}
        >
          {text}
        </Text>
      );
    } else {
      return undefined;
    }
  };

  render() {
    const { id, category, categorySubTitle, items, onPressItem } = this.props;
    return (
      <View style={{ marginLeft: 7 }}>
        <View
          style={{
            alignContent: "center",
            marginBottom: 5
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "#fff",
              fontSize: 15,
              fontWeight: "bold"
            }}
          >
            {category}
          </Text>
          {this._renderCategorySubTitle(categorySubTitle)}
        </View>
        <FlatList
          style={{ marginTop: 5 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={items}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <Spacer />
      </View>
    );
  }
}

class AlbumFlatListWrapper extends Component {
  render() {
    const { data, onPressItem } = this.props;

    var items = data.map((item, key) => {
      return (
        <AlbumFlatList
          onPressItem={onPressItem}
          key={item.id}
          id={item.id}
          category={item.category}
          categorySubTitle={item.categorySubTitle}
          items={item.items}
        />
      );
    });

    return items;
  }
}

export { AlbumFlatList, AlbumFlatListWrapper };
