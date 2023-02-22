import React from "react"
import { Text, View } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { selectBoardGame } from "../../store/actions/boardGame.action";

const GameDetail = ({ route }) => {
    const dispatch = useDispatch();
    const boardGames = useSelector((state)=>state.boardGames.boardGames
    )
    const { gameId } = route.params;

    const foundGame = dispatch(selectBoardGame(gameId))
    
    const currentGame = boardGames.find((game) => game.id === foundGame.gameId)

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