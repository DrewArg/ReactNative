import { StyleSheet } from "react-native";
import { colors, textInputs, fonts } from '../../constants/index'

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "95%",
        justifyContent: "space-around",
        paddingTop: 20,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    buttonContainer: {
        flexDirection: "row",
        width: "45%",
        justifyContent: "space-between"
    },
    item: {
        fontSize: fonts.itemSize,
        fontWeight: fonts.itemWeight,
        color: colors.lightText,
    },
    input: {
        fontSize: fonts.inputSize,
        fontWeight: fonts.inputWeight,
        color: colors.primary,
        borderBottomColor: colors.primary,
        borderBottomWidth: textInputs.borderBottomWidth,
        margin: textInputs.margin,
        minWidth: textInputs.minWidth,
        marginLeft: textInputs.marginLeft,
        marginRight: textInputs.marginRight
    },
});
