import { useState } from "react"
import { TouchableOpacity, View, TextInput } from "react-native"

const PlayerItem = () => {

    const [text, onChangeText] = useState("")

    return (
        <View >
            <TouchableOpacity >
                <View>
                    <TextInput onChangeText={onChangeText} value={text} placeholder="Jugador 1" />
                </View>
            </TouchableOpacity>
        </View >
    )
}

export default PlayerItem