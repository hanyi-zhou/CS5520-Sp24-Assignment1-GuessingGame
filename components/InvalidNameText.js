import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as colors from "../colors";

export default function InvalidNameText() {
  return (
    <View>
      <Text style={styles.text}>Please enter a valid name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.grey,
  },
});
