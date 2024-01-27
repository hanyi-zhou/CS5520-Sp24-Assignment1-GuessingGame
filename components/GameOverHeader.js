import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as colors from "../colors";

export default function GameOverHeader() {
  return (
    <View>
      <Text style={styles.header}>Game is over</Text>
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
