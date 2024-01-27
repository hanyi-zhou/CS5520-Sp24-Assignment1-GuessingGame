import { StyleSheet, Text, View } from "react-native";
import CheckBox from "expo-checkbox";
import React from "react";
import * as colors from "../colors";

export default function CheckRobot({ value, onCheckedChange }) {
  function changeValueHandler(isChecked) {
    onCheckedChange(isChecked);
  }

  return (
    <View style={styles.container}>
      <CheckBox value={value} onValueChange={changeValueHandler} />
      <Text style={styles.text}>I am not a robot</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 10,
  },
  text: {
    fontSize: 20,
    color: colors.purple,
  },
});
