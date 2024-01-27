import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ResetButton({
  onNameReset,
  onNumberReset,
  onCheckedReset,
  onValidReset,
}) {
  function resetHandler() {
    onNameReset();
    onNumberReset();
    onCheckedReset();
    onValidReset();
  }

  return (
    <View>
      <Button title="Reset" onPress={resetHandler} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({});
