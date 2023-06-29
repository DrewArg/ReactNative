import { Text, TouchableOpacity, View } from "react-native"

const GameItem = ({ item, onSelected }) => {
    return (
        <View >
            <TouchableOpacity onPress={() => onSelected(item)}>
                <View>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}

export default GameItem