import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DoneButton({ onDone }) {
  return (
    <View>
      <Button title="I am done" onPress={onDone} color="red"></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
