import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as colors from "../colors";

export default function GameStartHeader() {
  return (
    <View>
      <Text style={styles.header}>Guess My Number</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: colors.purple,
    fontSize: 25,
    marginTop: 70,
  },
});
