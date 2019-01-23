import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../Common/Colors";

const InputGroup = ({
  iconName,
  value,
  containerStyle,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  maxLength
}) => {
  return (
    <View style={containerStyle || styles.containerStyle}>
      <Icon
        type="font-awesome"
        color={Colors.antiFlashWhite}
        name={iconName}
        size={15}
        containerStyle={{
          paddingLeft: 4,
          alignSelf: "center",
          alignContent: "center"
        }}
      />
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        maxLength={maxLength}
        keyboardType={keyboardType}
        placeholderTextColor={Colors.antiFlashWhite}
        style={{
          flex: 1,
          fontSize: 14,
          color: Colors.antiFlashWhite,
          height: 40,
          padding: 7
        }}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: "row",
    borderWidth: 0.1,
    borderRadius: 5,
    backgroundColor: "rgba(51, 51, 51, 0.8)"
  }
};

export { InputGroup };
