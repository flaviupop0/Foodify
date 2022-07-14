import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { FlatList, ScrollView } from "react-native";
import { ingredients } from "../api/calls";
import { instructions } from "../api/calls";

const VeganDetailScreen = ({ navigation }) => {
  const [myIngredients, setIngredients] = useState([]);
  const [myInstructions, setInstructions] = useState([]);

  const id = navigation.getParam("id");

  const fetchIngredients = async () => {
    const tempIngredients = await ingredients(id);
    setIngredients(tempIngredients);
  };

  const fetchInstructions = async () => {
    const tempInstructions = await instructions(id);
    setInstructions(tempInstructions);
  };

  useEffect(() => {
    fetchIngredients(id);
  }, []);

  useEffect(() => {
    fetchInstructions(id);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5902bd" />
      <Image style={styles.image} source={{ uri: myIngredients.image }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>Ingredients</Text>
        <FlatList
          data={myIngredients.extendedIngredients}
          keyExtractor={(key) => key.original}
          renderItem={({ item }) => {
            return <Text style={styles.normal}>{item.original}</Text>;
          }}
        />
        <Text style={styles.subtitle}>Instructions</Text>
        {myInstructions.map((items) => {
          return items.steps.map((instructions) => {
            return (
              <Text style={styles.normal} key={instructions.number}>
                Step {instructions.number} {instructions.step}
              </Text>
            );
          });
        })}
        <Text style={styles.subtitle}>💯 Number of servings 💯</Text>
        <Text style={styles.normal}>
          You can make {myIngredients.servings} pieces.
        </Text>
        <Text style={styles.subtitle}>🕰 Time to prepare 🕰</Text>
        <Text style={styles.normal}>
          It will be done in {myIngredients.readyInMinutes} minutes.
        </Text>
        <Text style={styles.subtitle}>❤️ Healthscore ❤️</Text>
        <Text style={styles.normal}>
          Is it healthy or not? Let's see : {myIngredients.healthScore}
        </Text>
        <Text style={styles.subtitle}>🥗Is it good for vegans?🥗</Text>
        {myIngredients.vegan ? (
          <Text style={styles.normal}>Yes, it is. 🥒</Text>
        ) : (
          <Text style={styles.normal}>It's not. 😢</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    height: 250,
    width: 420,
    alignSelf: "center",
    marginBottom: 5,
  },
  normal: {
    fontSize: 14,
    textAlign: "justify",
    margin: 10,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
export default VeganDetailScreen;
