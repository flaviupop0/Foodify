import { TouchableOpacity, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import VeganScreen from "../screens/VeganScreen";
import VeganDetailScreen from "../screens/VeganDetailScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const VeganFlow = createStackNavigator({
  Vegan: VeganScreen,
  VeganDetails: VeganDetailScreen,
});

VeganDetailScreen.navigationOptions = ({ navigation }) => {
  const { navigate } = navigation;

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
      <TouchableOpacity>
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

VeganScreen.navigationOptions = {
  title: "Vegan Food",
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

const styles = StyleSheet.create({
  star: {
    color: "yellow",
    marginRight: 20,
  },
  back: {
    marginLeft: 20,
  },
});

export default createAppContainer(VeganFlow);
