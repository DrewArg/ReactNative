import * as ImagePicker from "expo-image-picker"
import React, { useState } from "react"
import { View, Image, Text, Alert, Button } from "react-native"
import { styles } from "../header/styles"

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
        try {
            const isCameraPermission = await verifyPermissions();
            if (!isCameraPermission) return

            const image = await ImagePicker.launchCameraAsync({
                aspect: [16, 9],
                quality: 0.7
            })

            setPickedUrl(image.assets[0].uri)
            onImage(image.assets[0].uri)
            console.log("image.assets[0].uri");
            console.log(image.assets[0].uri)
            console.log("image.assets[0]");
            console.log(image.assets[0]);

        } catch (error) {
            console.log(error)
        }


    }

    return (
        <View>
            <View>
                {!pickedUrl ? (
                    <Text>No hay imagen seleccionada</Text>
                ) : (
                    <Image source={{ uri: pickedUrl }} style={{width: 240, height: 135}} />
                )}
            </View>
            <Button title="tomar foto" onPress={onHandleTakeImage} />
        </View>
    )
}

export default ImageSelector