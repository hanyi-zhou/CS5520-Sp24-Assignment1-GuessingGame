import { StyleSheet, Button, Text, View } from "react-native";
import React from "react";

export default function ConfirmButton({ onSubmit, isChecked }) {
  function confirmHandler() {
    onSubmit();
  }

  return (
    <View>
      <Button title="Confirm" onPress={confirmHandler} disabled={!isChecked} />
    </View>
  );
}

const styles = StyleSheet.create({});
