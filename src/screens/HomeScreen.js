import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { random } from "../api/calls";
import { withNavigation } from "react-navigation";
const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const [randomFood, setRandomFood] = useState([]);

  const fetchRandom = async () => {
    const tempData = await random();
    setRandomFood(tempData);
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#5902bd" />
        <View>
          {randomFood.map((item) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigate("HomeDetails", {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                  })
                }
                key={item.id}
              >
                <View>
                  <ImageBackground
                    resizeMode="contain"
                    style={styles.image}
                    source={{ uri: item.image }}
                  >
                    <View style={styles.textContainer}>
                      <Text style={styles.name}>{item.title}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default withNavigation(HomeScreen);
