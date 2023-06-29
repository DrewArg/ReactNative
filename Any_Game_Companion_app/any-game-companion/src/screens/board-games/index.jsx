import React, { useEffect } from "react"
import { FlatList, SafeAreaView, Text } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { AddBoardGameItem, GameItem } from "../../components"
import { loadBoardGames, loadBoardGameById } from "../../store/boardGame.slice"

const BoardGames = ({ navigation }) => {

    const dispatch = useDispatch()
    const boardGames = useSelector((state) => state.boardGame.boardGames)

    const onSelected = (item) => {
        dispatch(loadBoardGameById(item.id))
        navigation.navigate("GameDetail", {
            gameId: item.id
        })
    }

    const renderGame = ({ item }) => <GameItem item={item} onSelected={onSelected} />;

    const keyExtractor = (item) => item.id.toString()

    useEffect(() => {
        dispatch(loadBoardGames())
    }, [dispatch])

    return (
        <SafeAreaView >

            {boardGames.length > 0 ?
                <>
                    <Text>Lista de juegos</Text>
                    <FlatList
                        data={boardGames}
                        renderItem={renderGame}
                        keyExtractor={keyExtractor}
                    />
                    <Text>Agregar Otro</Text>
                    <AddBoardGameItem />
                </>
                :
                <>
                    <Text>Agregar Juego nuevo</Text>
                    <AddBoardGameItem />
                </>
            }

        </SafeAreaView>
    )

}

export default BoardGames