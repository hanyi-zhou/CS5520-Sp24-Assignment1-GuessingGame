import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as colors from "../colors";

export default function Hint({ userData, hintMessage, attemptsLeft }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Hello {userData.name} </Text>
        <Text style={styles.text}>You have chosen {userData.number} </Text>
        <Text style={styles.text}>That's not my number!</Text>
        {attemptsLeft !== 0 && (
          <Text style={styles.text}>Guess {hintMessage}!</Text>
        )}
        <Text style={styles.text}>
          You have {attemptsLeft === 0 ? "no" : attemptsLeft} attempts left!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    rowGap: 50,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 25,
    color: colors.purple,
  },
});
