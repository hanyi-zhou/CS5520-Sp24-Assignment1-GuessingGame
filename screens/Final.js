import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GameOverHeader from "../components/GameOverHeader";
import Picture from "../components/Picture";
import StartAgainButton from "../components/StartAgainButton";
import Card from "../components/Card";

export default function Final({
  userData,
  correctNumber,
  updateCorrectNumber,
  resetAttemptsLeft,
  navigateToStart,
}) {
  function handleStartAgain() {
    updateCorrectNumber();
    resetAttemptsLeft();
    navigateToStart();
    userData.name = "";
    userData.number = "";
    userData.isChecked = false;
  }

  return (
    <View style={styles.container}>
      <GameOverHeader />
      <Card>
        <Picture userData={userData} correctNumber={correctNumber} />
        <StartAgainButton onStartAgain={handleStartAgain} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    rowGap: 50,
  },
});
