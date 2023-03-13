import * as ImagePicker from "expo-image-picker"
import React, { useState } from "react"
import { View, Image, Text, Alert, Button } from "react-native"

const ImageSelector = ({ onImage }) => {
    const [pickedUrl, setPickedUrl] = useState(null)

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted") {
            Alert.alert("Permission denied", "We need permissions to use your cammera", [{ text: "Ok" }])
            return false;
        }
        return true
    }

    const onHandleTakeImage = async () => {
        const isCameraPermission = await verifyPermissions();
        if (!isCameraPermission) return

        const image = await ImagePicker.launchCameraAsync({
            aspect: [16, 9],
            quality: 0.7
        })

        setPickedUrl(image.uri)
        onImage(image.uri)
    }

    return (
        <View>
            <View>
                {!pickedUrl ? (
                    <Text>No hay imagen seleccionada</Text>
                ): (
                    <Image source={{uri:pickedUrl}}/>
                )}
            </View>
            <Button title="tomar foto" onPress={onHandleTakeImage} />
        </View>
    )
}

export default ImageSelector