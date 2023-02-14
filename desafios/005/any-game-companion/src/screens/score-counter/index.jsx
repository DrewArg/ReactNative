import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";

const ScoreCounter = ({ navigation }) => {

    const [qty, onChangeQty] = useState("")

    const handlePlayers = () => {
        navigation.navigate('Players'), {
            playerQty: qty
        }
    }

    return (
        <View>
            <Text>Juego por Defecto</Text>
            <Text>Cantidad de Jugadores</Text>
            <TextInput keyboardType="numeric" value={qty} onChangeText={onChangeQty} />
            <Button onPress={handlePlayers} title={"Jugar!"} />
        </View>
    )
}

export default ScoreCounter