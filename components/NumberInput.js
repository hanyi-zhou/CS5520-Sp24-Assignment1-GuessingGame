import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import * as colors from "../colors";

export default function NumberInput({ value, onNumberChange }) {
  function changeNumberHandler(numberInput) {
    onNumberChange(numberInput);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={changeNumberHandler}
        keyboardType="numeric"
        maxLength={4}
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
