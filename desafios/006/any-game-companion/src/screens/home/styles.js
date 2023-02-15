import { StyleSheet } from "react-native";
import { colors, fonts } from '../../constants/index'

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,

  },
  title: {
    fontSize: fonts.titleSize,
    fontfamily: fonts.titleFamily,
    color: colors.lightText,
    margin: 10

  },
  footnote: {
    fontSize: fonts.itemSize,
    fontFamily: fonts.itemFamily,
    color: colors.alertText,
    margin: 20
  }

});
