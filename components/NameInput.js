import { StyleSheet, TextInput, View, Text } from "react-native";
import React from "react";
import * as colors from "../colors";

export default function NameInput({ value, onNameChange }) {
  function changeNameHandler(nameInput) {
    onNameChange(nameInput);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={changeNameHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.purple,
    width: 280,
    textAlign: "center",
    fontSize: 25,
  },
});
