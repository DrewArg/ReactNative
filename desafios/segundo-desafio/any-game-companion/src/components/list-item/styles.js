import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "95%",
        justifyContent: "space-around",
        paddingTop: 20,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    buttonContainer: {
        flexDirection: "row",
        width: "45%",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4E4D4D",
    },
    input: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4E4D4D",
        borderBottomColor: "4E4D4D",
        borderBottomWidth: 2,
        margin: 10,
        minWidth: 75,
        marginLeft: 10,
        marginRight: 10
    },
});
