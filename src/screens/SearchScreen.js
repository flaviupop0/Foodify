import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  View,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { search } from "../api/calls";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
const SearchScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const [term, setTerm] = useState("");
  const [myResult, setResult] = useState([]);

  const fetchResult = async () => {
    const tempResult = await search(term);
    setResult(tempResult);
  };

  return (
    <SafeAreaView style={styles.bigContainer}>
      <StatusBar backgroundColor="#5902bd" />
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => fetchResult(term)}
      />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={myResult.results}
          keyExtractor={(key) => key.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigate("Details", {
                    title: item.title,
                    id: item.id,
                    image: item.image,
                  })
                }
              >
                <ImageBackground
                  style={styles.image}
                  source={{ uri: item.image }}
                >
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.title}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    overflow: "hidden",
    alignSelf: "center",
  },
  image: {
    height: 250,
    width: 320,
    justifyContent: "flex-end",
    marginVertical: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
});

export default withNavigation(SearchScreen);
