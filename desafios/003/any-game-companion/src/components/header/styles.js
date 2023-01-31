import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: fonts.titleSize,
    fontFamily: fonts.titleFamily,
    color: colors.darkText,
  },
});
