import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GuessAgainButton({ onGuessAgain, attemptsLeft }) {
  return (
    <View>
      <Button
        title="Let Me Guess Again"
        onPress={onGuessAgain}
        disabled={attemptsLeft === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
