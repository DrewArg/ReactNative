import React from "react"
import { FlatList, SafeAreaView } from "react-native"
import { BOARD_GAMES } from "../../constants/data/index"
import { GameItem } from "../../components"


const BoardGames = ({ navigation }) => {

    const onSelected = (item) => {
        navigation.navigate("GameDetail", {
            gameId: item.id,
            title: item.title
        })
    }

    const renderGame = ({ item }) => <GameItem item={item} onSelected={onSelected} />;

    const keyExtractor = (item) => item.id.toString()

    return (
        <SafeAreaView >
            <FlatList
                data={BOARD_GAMES}
                renderItem={renderGame}
                keyExtractor={keyExtractor}
            />

        </SafeAreaView>
    )

}

export default BoardGames