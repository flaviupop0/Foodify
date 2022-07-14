export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleFavorite = ({ navigation }) => {
  const id = navigation.getParam("id");
  return { type: TOGGLE_FAVORITE, id };
};
