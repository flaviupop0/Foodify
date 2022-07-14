import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";

const FavouriteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.backgroundColor} />
      <Text style={styles.normalText}>
        Please, add some recipe as favourite.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  normalText: {
    marginTop: 2,
  },
  statusBar: {
    backgroundColor: "#5902bd",
  },
});

export default FavouriteScreen;
