import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";

const ScoreCounter = ({ navigation }) => {

    const [text, onChangeText] = useState("")

    const handlePlayers = () => {
        navigation.navigate('Juegos')
    }

    return (
        <View>
            <Text>Juego por Defecto</Text>
            <Text>Cantidad de Jugadores</Text>
            <TextInput keyboardType="numeric" value={text} onChangeText={onChangeText} />
            <Button onPress={handlePlayers} title={"Jugar!"} />
        </View>
    )
}

export default ScoreCounter