import { Text, View, Button, TextInput } from "react-native"
import { useState } from "react";
import { styles } from "./styles";

const ListItem = ({ title, id, handleDeleteItem, handleConfirm }) => {

    const [isEditable, setIsEditable] = useState(false)
    const [text, onChangeText] = useState('')


    const handleEditItem = () => {
        setIsEditable(!isEditable)
    }

    return (
        <>
            {
                isEditable ?
                    <View style={styles.container}>
                        < TextInput
                            onChangeText={onChangeText}
                            value={text}
                            style={styles.input}
                        />
                        <View style={styles.buttonContainer}>
                            <Button title="Confirmar" onPress={() => { handleConfirm(id, text); setIsEditable(false) }} color="#4E4D4D" />
                        </View>

                    </View >
                    :
                    <View style={styles.container}>
                        <Text style={styles.item} id={id}>{title}</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Editar" onPress={() => handleEditItem()} color="#4E4D4D" />
                            <Button title="Borrar" onPress={() => handleDeleteItem(id)} color="#4E4D4D" />
                        </View>
                    </View>
            }
        </>
    )
}

export default ListItem