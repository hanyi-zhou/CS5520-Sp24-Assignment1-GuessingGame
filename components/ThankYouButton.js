import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ThankYouButton({ onThankYou }) {
  return (
    <View>
      <Button title="Thank You!" onPress={onThankYou} />
    </View>
  );
}

const styles = StyleSheet.create({});
