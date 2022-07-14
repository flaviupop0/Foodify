import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign style={styles.icon} name="search1" size={24} color="black" />
      <TextInput
        selectionColor="#5902bd"
        style={styles.inputStyle}
        autoCapitalize="none"
        placeholder="Search for a recipe"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
        autoCorrect={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 5,
    backgroundColor: "#E2E5DE",
    height: 40,
    borderRadius: 15,
    marginHorizontal: 50,
    flexDirection: "row",
    marginBottom: 5,
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
    marginRight: 10,
  },
  icon: {
    marginHorizontal: 10,
    fontSize: 25,
    alignSelf: "center",
  },
});

export default SearchBar;
