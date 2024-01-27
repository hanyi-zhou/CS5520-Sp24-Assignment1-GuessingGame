import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function StartAgainButton({ onStartAgain }) {
  return (
    <View>
      <Button title="Start Again" onPress={onStartAgain} />
    </View>
  );
}

const styles = StyleSheet.create({});
