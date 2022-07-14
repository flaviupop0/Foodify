import { TouchableOpacity } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MealDetailScreen from "../screens/MealDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const SearchFlow = createStackNavigator({
  Search: SearchScreen,
  Details: MealDetailScreen,
});

SearchScreen.navigationOptions = {
  title: "Search",
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

MealDetailScreen.navigationOptions = ({ navigation }) => {
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
        <AntDesign
          name="star"
          size={24}
          style={{ color: "yellow", marginRight: 20 }}
        />
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>
    ),
  };
};

SearchFlow.navigationOptions = {
  title: "Search",
  initialRouteName: "Search",
};
export default createAppContainer(SearchFlow);
