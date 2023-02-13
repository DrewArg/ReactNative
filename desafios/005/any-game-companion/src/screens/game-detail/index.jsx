import React from "react"
import { Text, View } from "react-native";
import { BOARD_GAMES } from "../../constants/data";

const GameDetail = ({ route }) => {
    const { gameId, title } = route.params;

    const currentGame = BOARD_GAMES.find((game) => game.id === gameId)

    return (
        <View>
            <Text>{currentGame.id}</Text>
            <Text>{currentGame.title}</Text>
            <Text>{currentGame.description}</Text>
            <Text>{currentGame.playerQty}</Text>
        </View>
    )
}

export default GameDetail