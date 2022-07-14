import { TouchableOpacity, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import HomeDetailScreen from "../screens/HomeDetailScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const MealsFlow = createStackNavigator({
  Home: HomeScreen,
  HomeDetails: HomeDetailScreen,
});

HomeScreen.navigationOptions = {
  title: "Home",
  headerShown: true,
  headerStyle: {
    backgroundColor: "#5902bd",
  },
  headerTitleStyle: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
};

HomeDetailScreen.navigationOptions = ({ navigation }) => {
  const { navigate } = navigation;
  const toggleFavorite = navigation.getParam("toggleFav");
  const title = navigation.getParam("title");
  return {
    title: `${title}`,
    headerShown: true,
    headerStyle: {
      backgroundColor: "#5902bd",
    },
    headerTitleStyle: {
      alignSelf: "center",
      color: "white",
      fontWeight: "bold",
      fontSize: 15,
    },
    headerRight: () => (
      <TouchableOpacity onPress={toggleFavorite}>
        <AntDesign name="star" size={24} style={styles.star} />
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigate("Home")}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          style={styles.back}
        />
      </TouchableOpacity>
    ),
  };
};

MealsFlow.navigationOptions = {
  title: "Home",
  headerShown: false,
  initialRouteName: "Home",
};

const styles = StyleSheet.create({
  star: {
    color: "yellow",
    marginRight: 20,
  },
  back: {
    marginLeft: 20,
  },
});
export default createAppContainer(MealsFlow);
