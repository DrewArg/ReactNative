import React from "react"
import { FlatList, SafeAreaView } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { GameItem } from "../../components"
import { selectBoardGame } from "../../store/actions/boardGame.action";


const BoardGames = ({ navigation }) => {

    const dispatch = useDispatch()
    const boardGames = useSelector((state)=>state.boardGames.boardGames)

    const onSelected = (item) => {
        dispatch(selectBoardGame(item.id))
        navigation.navigate("GameDetail", {
            gameId: item.id
        })
    }

    const renderGame = ({ item }) => <GameItem item={item} onSelected={onSelected} />;

    const keyExtractor = (item) => item.id.toString()

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