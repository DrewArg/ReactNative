import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";

import { ImageSelector } from "../../components";

const CaptureGame = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")

    const onHandleChange = (text) => {
        setTitle(text)
    }

    const onHandleImageSelect = (imageUrl) => {
        setImage(imageUrl)
    }

    return (
        <ScrollView>
            <View>
                <ImageSelector onImage={onHandleImageSelect} />
            </View>
        </ScrollView>
    )
}

export default CaptureGame