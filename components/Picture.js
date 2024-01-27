import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as colors from "../colors";

export default function Picture({ userData, correctNumber }) {
  const [imageSource, setImageSource] = React.useState();

  React.useEffect(() => {
    getImageSource(userData, correctNumber);
  }, [userData, correctNumber]);

  function getImageSource(userData, correctNumber) {
    const guessNumber = parseInt(userData.number);
    if (guessNumber !== correctNumber) {
      setImageSource(require("../assets/SadFace.png"));
    } else if (guessNumber === 1020) {
      setImageSource(require("../assets/1020.png"));
    } else if (guessNumber === 1021) {
      setImageSource(require("../assets/1021.png"));
    } else if (guessNumber === 1022) {
      setImageSource(require("../assets/1022.png"));
    } else if (guessNumber === 1023) {
      setImageSource(require("../assets/1023.png"));
    } else if (guessNumber === 1024) {
      setImageSource(require("../assets/1024.png"));
    } else if (guessNumber === 1025) {
      setImageSource(require("../assets/1025.png"));
    } else if (guessNumber === 1026) {
      setImageSource(require("../assets/1026.png"));
    } else if (guessNumber === 1027) {
      setImageSource(require("../assets/1027.png"));
    } else if (guessNumber === 1028) {
      setImageSource(require("../assets/1028.png"));
    } else if (guessNumber === 1029) {
      setImageSource(require("../assets/1029.png"));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here's your picture</Text>
      <Image style={styles.image} source={imageSource} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: 25,
  },
  text: {
    fontSize: 25,
    color: colors.purple,
  },
  image: {
    width: 150,
    height: 150,
  },
});
