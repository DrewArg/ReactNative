import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react"
import { Text, View, Button, Image } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { loadBoardGameById } from "../../store/boardGame.slice"

const GameDetail = ({ route }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)

    const { gameId } = route.params;

    const foundGame = dispatch(loadBoardGameById(gameId))

    const boardGameDetail = useSelector((state) => state.boardGame.boardGameDetail
    )

    // const currentGame = boardGames.find((game) => game.id === foundGame.gameId)

    useEffect(() => {
        if (boardGameDetail !== null) {
            setLoading(false)
        }
    }, [boardGameDetail])

    return (
        <View>

            {loading ?
                <Text>Loading...</Text>
                :

                <>

                    <Image source={{ uri: boardGameDetail.image }} style={{ width: 380, height: 215 }} />
                    <Text>Id: {boardGameDetail.id}</Text>
                    <Text>Title: {boardGameDetail.title}</Text>
                    <Text>Description: {boardGameDetail.description}</Text>
                    <Text>Players: {boardGameDetail.playerQty}</Text>
                </>
            }



        </View>
    )
}

export default GameDetail