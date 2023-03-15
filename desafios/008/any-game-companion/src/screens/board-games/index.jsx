import React, { useEffect } from "react"
import { FlatList, SafeAreaView } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { GameItem } from "../../components"
import { loadBoardGames } from "../../store/boardGame.slice"

const BoardGames = ({ navigation }) => {

    const dispatch = useDispatch()
    const boardGames = useSelector((state) => state.boardGame.boardGames)

    const onSelected = (item) => {
        dispatch(selectBoardGame(item.id))
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
            <FlatList
                data={boardGames}
                renderItem={renderGame}
                keyExtractor={keyExtractor}
            />
        </SafeAreaView>
    )

}

export default BoardGames