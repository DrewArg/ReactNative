import { useState } from 'react'
import { Button, ScrollView, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { saveBoardGame } from '../../store/boardGame.slice'
import ImageSelector from '../image-selector'

const addBoardGameItem = ({ navigation }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [playerQty, setPlayerQty] = useState("")
    const [image, setImage] = useState("")

    const onHandleTitleChange = (text) => {
        setTitle(text)
    }

    const onHandleDescriptionChange = (description) => {
        setDescription(description)
    }

    const onHandlePlayerQtyChange = (playerQty) => {
        setPlayerQty(playerQty)
    }

    const onHandleImageSelect = (imageUrl) => {
        setImage(imageUrl)
    }

    const onHandleSubmit = () => {
        dispatch(saveBoardGame(title, description, playerQty, image))
        navigation.navigate("BoardGames")
    }

    return (
        <ScrollView >
            <View>
                <TextInput
                    placeholder='Título'
                    onChangeText={onHandleTitleChange}
                    value={title}
                />
                <TextInput
                    placeholder='Descripción'
                    onChangeText={onHandleDescriptionChange}
                    value={description}
                />
                <TextInput
                    placeholder='Cantidad de Jugadores'
                    onChangeText={onHandlePlayerQtyChange}
                    value={playerQty}
                />
                <ImageSelector onImage={onHandleImageSelect} />
                <Button title='Guardar juego' onPress={onHandleSubmit}/>
            </View>
        </ScrollView>
    )
}

export default addBoardGameItem