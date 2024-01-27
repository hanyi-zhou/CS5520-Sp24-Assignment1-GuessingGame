import { StyleSheet, View, Modal } from "react-native";
import React from "react";
import Hint from "../components/Hint";
import DoneButton from "../components/DoneButton";
import GuessAgainButton from "../components/GuessAgainButton";
import Congratulation from "../components/Congratulation";
import ThankYouButton from "../components/ThankYouButton";
import Card from "../components/Card";

export default function Game({
  modalVisible,
  userData,
  correctNumber,
  attemptsLeft,
  navigateToStart,
  navigateToFinal,
}) {
  const [hint, setHint] = React.useState("");
  const [hasUserGuessedCorrectly, setHasUserGuessedCorrectly] =
    React.useState(false);

  React.useEffect(() => {
    giveHint(userData, correctNumber);
  }, [userData, correctNumber]);

  function giveHint(userData, correctNumber) {
    if (parseInt(userData.number) < correctNumber) {
      setHint("higher");
    } else if (parseInt(userData.number) > correctNumber) {
      setHint("lower");
    } else {
      setHint("");
      setHasUserGuessedCorrectly(true);
    }
  }

  function handleGuessAgain() {
    setHasUserGuessedCorrectly(false);
    setHint("");
    navigateToStart();
  }

  function handleDone() {
    navigateToFinal();
  }

  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <View style={styles.container}>
        <Card>
          {!hasUserGuessedCorrectly ? (
            <View style={styles.hint}>
              <Hint
                userData={userData}
                hintMessage={hint}
                attemptsLeft={attemptsLeft}
              />
              <View style={styles.doneButton}>
                <DoneButton onDone={handleDone} />
              </View>
              <View style={styles.guessAgainButton}>
                <GuessAgainButton
                  onGuessAgain={handleGuessAgain}
                  attemptsLeft={attemptsLeft}
                />
              </View>
            </View>
          ) : (
            <View style={styles.congratulation}>
              <Congratulation userData={userData} />
              <ThankYouButton onThankYou={handleDone} />
            </View>
          )}
        </Card>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hint: {
    rowGap: 25,
  },
  congratulation: {
    alignItems: "center",
    justifyContent: "space-evenly",
    rowGap: 25,
  },
  doneButton: {
    marginTop: 10,
  },
  guessAgainButton: {
    marginTop: 10,
  },
});
