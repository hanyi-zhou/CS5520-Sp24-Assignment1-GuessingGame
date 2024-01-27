import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GameStartHeader from "../components/GameStartHeader";
import NameInput from "./../components/NameInput";
import NumberInput from "./../components/NumberInput";
import CheckRobot from "./../components/CheckRobot";
import ResetButton from "./../components/ResetButton";
import ConfirmButton from "./../components/ConfirmButton";
import InvalidNameText from "./../components/InvalidNameText";
import InvalidNumberText from "./../components/InvalidNumberText";
import Card from "../components/Card";
import * as colors from "../colors";

export default function Start({
  onStartGame,
  updateUserData,
  updateCorrectNumber,
  updateAttemptsLeft,
  userData,
}) {
  const [name, setName] = React.useState(userData.name);
  const [number, setNumber] = React.useState(userData.number);
  const [isChecked, setChecked] = React.useState(false);
  const [nameError, setNameError] = React.useState("");
  const [numberError, setNumberError] = React.useState("");

  function handleNameChange(name) {
    setName(name);
  }

  function handleNameReset() {
    setName("");
  }

  function handleNumberChange(number) {
    setNumber(number);
  }

  function handleNumberReset() {
    setNumber("");
  }

  function handleCheckedReset() {
    setChecked(false);
  }

  function handleValidReset() {
    setNameError("");
    setNumberError("");
  }

  function validateNameInput(nameInput) {
    if (nameInput.length <= 1 || /\d/.test(nameInput)) {
      setNameError("Please enter a valid name");
      return false;
    }
    setNameError("");
    return true;
  }

  function validateNumberInput(numberInput) {
    const isNumeric = /^[0-9]+$/.test(numberInput);

    if (
      !isNumeric ||
      parseInt(numberInput) < 1020 ||
      parseInt(numberInput) > 1029
    ) {
      setNumberError("Please enter a valid number");
      return false;
    }
    setNumberError("");
    return true;
  }

  function handleSubmit() {
    setNameError("");
    setNumberError("");

    const isNameValid = validateNameInput(name);
    const isNumberValid = validateNumberInput(number);

    if (isNameValid && isNumberValid && isChecked) {
      updateAttemptsLeft();
      updateCorrectNumber();
      updateUserData(name, number, isChecked);
      onStartGame();
    }
  }

  return (
    <View style={styles.container}>
      <GameStartHeader />
      <Card>
        <View style={styles.nameInput}>
          <Text style={styles.text}>Name</Text>
          <NameInput value={name} onNameChange={handleNameChange} />
        </View>
        <View style={styles.nameError}>
          {nameError !== "" ? <InvalidNameText /> : null}
        </View>
        <View style={styles.numberInput}>
          <Text style={styles.text}>Enter a Number</Text>
          <NumberInput value={number} onNumberChange={handleNumberChange} />
        </View>
        <View style={styles.numberError}>
          {numberError !== "" ? <InvalidNumberText /> : null}
        </View>
        <View style={styles.bottomView}>
          <CheckRobot value={isChecked} onCheckedChange={setChecked} />
          <View style={styles.buttonView}>
            <ResetButton
              onNameReset={handleNameReset}
              onNumberReset={handleNumberReset}
              onCheckedReset={handleCheckedReset}
              onValidReset={handleValidReset}
            />
            <ConfirmButton onSubmit={handleSubmit} isChecked={isChecked} />
          </View>
        </View>
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
  text: {
    fontSize: 25,
    color: colors.purple,
  },
  nameInput: {
    marginBottom: 10,
  },
  nameError: {
    height: 20,
    marginBottom: 10,
  },
  numberInput: {
    marginBottom: 10,
  },
  numberError: {
    height: 20,
    marginBottom: 10,
  },
  bottomView: {
    marginTop: 10,
    rowGap: 30,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});
