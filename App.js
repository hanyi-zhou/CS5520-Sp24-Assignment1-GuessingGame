import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Start from "./screens/Start";
import Game from "./screens/Game";
import Final from "./screens/Final";
import * as colors from "./colors";

export default function App() {
  const [isGameStarted, setIsGameStarted] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: "",
    number: "",
    isChecked: false,
  });
  const [correctNumber, setCorrectNumber] = React.useState(
    Math.floor(Math.random() * 10) + 1020
  );
  const [attemptsLeft, setAttemptsLeft] = React.useState(3);

  function startGame() {
    setIsGameStarted(true);
    setIsGameOver(false);
    updateCorrectNumber();
  }

  function updateUserData(name, number, isChecked) {
    setUserData({
      name: name,
      number: number,
      isChecked: isChecked,
    });
  }

  function updateCorrectNumber() {
    if (attemptsLeft === 0 || isGameOver) {
      setCorrectNumber(Math.floor(Math.random() * 10) + 1020);
    }
  }

  function reduceAttemptsLeft() {
    setAttemptsLeft(attemptsLeft - 1);
  }

  function navigateToStart() {
    setIsGameStarted(false);
    setIsGameOver(false);
  }

  function navigateToFinal() {
    setIsGameStarted(false);
    setIsGameOver(true);
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.thistle, colors.plum]}
        style={styles.background}
      />
      {!isGameStarted && !isGameOver && (
        <Start
          onStartGame={startGame}
          updateUserData={updateUserData}
          updateCorrectNumber={updateCorrectNumber}
          updateAttemptsLeft={reduceAttemptsLeft}
          userData={userData}
        />
      )}
      {isGameStarted && !isGameOver && (
        <Game
          modalVisible={isGameStarted}
          userData={userData}
          correctNumber={correctNumber}
          attemptsLeft={attemptsLeft}
          navigateToStart={navigateToStart}
          navigateToFinal={navigateToFinal}
        />
      )}
      {!isGameStarted && isGameOver && (
        <Final
          userData={userData}
          correctNumber={correctNumber}
          updateCorrectNumber={updateCorrectNumber}
          resetAttemptsLeft={() => setAttemptsLeft(3)}
          navigateToStart={navigateToStart}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
