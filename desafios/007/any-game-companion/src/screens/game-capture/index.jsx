import React, { useState } from "react"
import { View, Text, ScrollView, TextInput, Button } from "react-native"
import { useDispatch } from "react-redux"

import { ImageSelector } from "../../components"

const GameCapture = ({ navigation }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")

    const onHandleChange = (text) => {
        setTitle(text)
    }


    const onHandleImageSelect = (imageUrl) => {
        setImage(imageUrl)
    }

    return (
        <ScrollView >
            <View>
                <Text>Título</Text>
                <TextInput placeholder="Nueva ubicacion"
                    onChangeText={onHandleChange}
                    value={title} />
                <ImageSelector onImage={onHandleImageSelect} />
                <Button title="Cargar" />
            </View>
        </ScrollView>
    )


}

export default GameCapture