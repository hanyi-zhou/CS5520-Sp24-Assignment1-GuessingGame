import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as colors from "../colors";

export default function Congratulation({ userData }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Congrats {userData.name}! You Won! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    rowGap: 50,
  },
  text: {
    fontSize: 25,
    color: colors.purple,
    textAlign: "center",
  },
});
