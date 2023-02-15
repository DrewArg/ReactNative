import { StyleSheet } from "react-native";
import { colors, fonts, textInputs } from "../../constants";

export const styles = StyleSheet.create({
    input: {
        fontSize: fonts.inputSize,
        fontFamily: fonts.inputFamily,
        color: colors.primary,
        borderBottomColor: colors.primary,
        borderBottomWidth: textInputs.borderBottomWidth,
        margin: textInputs.margin,
        minWidth: textInputs.minWidth,
        marginLeft: textInputs.marginLeft,
        marginRight: textInputs.marginRight
    },
});
