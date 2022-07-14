import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavouritesFlow from "./src/navigator/FavouriteNavigator";
import MealsFlow from "./src/navigator/MealsNavigator";
import SearchFlow from "./src/navigator/SearchNavigator";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import VeganFlow from "./src/navigator/VeganNavigator";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./src/store/reducers/meals";
import { Provider } from "react-redux";
import { setNavigator } from "./navigationRef";

const rootReducer = combineReducers({
  favourite: mealsReducer,
});
const store = createStore(rootReducer);

const navigator = createBottomTabNavigator({
  MealsFlow,
  SearchFlow,
  VeganFlow,
  FavouritesFlow,
});
MealsFlow.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-fast-food-outline"
      size={24}
      style={{ color: focused ? "white" : "gray" }}
    />
  ),
  tabBarLabel: ({ focused }) => (
    <Text style={{ color: focused ? "white" : "gray", alignSelf: "center" }}>
      Home
    </Text>
  ),
  tabBarOptions: {
    style: {
      backgroundColor: "#5902bd",
      Color: "white",
    },
  },
};
SearchFlow.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="search-outline"
      size={24}
      style={{ color: focused ? "white" : "gray" }}
    />
  ),
  tabBarLabel: ({ focused }) => (
    <Text style={{ color: focused ? "white" : "gray", alignSelf: "center" }}>
      Search
    </Text>
  ),
  tabBarOptions: {
    style: {
      backgroundColor: "#5902bd",
    },
  },
};
VeganFlow.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
      name="food-apple-outline"
      size={24}
      style={{ color: focused ? "white" : "gray" }}
    />
  ),
  tabBarLabel: ({ focused }) => (
    <Text style={{ color: focused ? "white" : "gray", alignSelf: "center" }}>
      Vegan Food
    </Text>
  ),
  tabBarOptions: {
    style: {
      backgroundColor: "5902bd",
    },
  },
};

FavouritesFlow.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text style={{ color: focused ? "white" : "gray", alignSelf: "center" }}>
      Favourites
    </Text>
  ),
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="heart-circle-outline"
      size={24}
      style={{ color: focused ? "white" : "gray" }}
    />
  ),
  tabBarOptions: {
    style: {
      backgroundColor: "#5902bd",
    },
  },
};
navigator.defaultNavigationOptions = {
  headerShown: false,
  initialRouteName: "Home",
  tabBarOptions: {
    style: {
      backgroundColor: "#5902bd",
    },
  },
};
const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider store={store}>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </Provider>
  );
};
