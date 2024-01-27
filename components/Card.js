import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import * as colors from "../colors";

export default function Card({ children }) {
  const cardStyles =
    Platform.OS === "ios" ? styles.cardIOS : styles.cardAndroid;

  return <View style={[styles.card, cardStyles]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: colors.lavender,
    padding: 18,
    width: "80%",
    alignSelf: "auto",
    justifyContent: "space-around",
    rowGap: 20,
  },
  cardAndroid: {
    elevation: 5,
  },
  cardIOS: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
