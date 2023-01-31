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
    fontWeight: fonts.titleWeight,
    fontfamily: fonts.titleFamily,
    color: colors.lightText,
    margin: 10

  },
  footnote: {
    fontSize: fonts.itemSize,
    fontWeight: fonts.itemWeight,
    color: colors.alertText,
    margin: 20
  }

});
