import { useNavigation } from "@react-navigation/native";
import React from "react"
import { Text, View, Button, Image } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { selectBoardGame } from "../../store/actions/boardGame.action";

const GameDetail = ({ route }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const boardGames = useSelector((state) => state.boardGames.boardGames
    )
    const { gameId } = route.params;

    const foundGame = dispatch(selectBoardGame(gameId))

    const currentGame = boardGames.find((game) => game.id === foundGame.gameId)

    const addImage = () => {
        navigation.navigate("CaptureGame");
    }

    return (
        <View>
            {
                currentGame.url
                    ?
                    <Image source={{ uri: currentGame.url }} style={{ width: 380, height: 215 }} />
                    :
                    <Button title="Agregar imagen.." onPress={() => addImage()}/>
            }
            <Text>Id: {currentGame.id}</Text>
            <Text>Title: {currentGame.title}</Text>
            <Text>Description: {currentGame.description}</Text>
            <Text>Players: {currentGame.playerQty}</Text>


        </View>
    )
}

export default GameDetail