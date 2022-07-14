import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import FavouriteScreen from "../screens/FavouritesScreen";

const FavouritesFlow = createStackNavigator({
  Favourites: FavouriteScreen,
});
FavouritesFlow.navigationOptions = {
  title: "Favourites",
};
FavouriteScreen.navigationOptions = {
  title: "Favourites",
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
export default createAppContainer(FavouritesFlow);
