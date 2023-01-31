import { Button, View, TextInput } from "react-native"
import { useState } from "react";
import { ListItem } from "../../components"

import { styles } from './styles'

const ListContainer = () => {

    const [addition, setAddition] = useState(false)
    const [text, onChangeText] = useState('')

    const [items, setItems] = useState([])

    const handleAddition = (name) => {
        let id = Math.floor(Math.random() * 10000)
        if (items.length > 0) {
            setItems([...items, { id: id, name: name }])
        } else {
            setItems([{ id: id, name: name }])
        }
        setAddition(false)
        onChangeText('')
    }

    const handleConfirm = (id, name) => {
        if (!id) {
            throw new Error("El ID es obligatorio")
        }

        if (!name) {
            throw new Error("El nombre es obligatorio")
        }

        let array = items.map(i => {
            if (i.id === id) {
                i.name = name
            }
            return i
        })

        setItems(array)

    }

    const handleDeleteItem = (id) => {
        if (!id) {
            throw new Error("El ID es obligatorio")
        }
        let array = items.filter(i => i.id !== id)
        setItems(array)
    }

    return (
        <>
            {
                addition ?
                    <View>
                        < TextInput
                            onChangeText={onChangeText}
                            value={text}
                            style={styles.input}
                            placeholder="Nombre"

                        />
                        <Button title="Confirmar" onPress={() => { handleAddition(text) }} color="#4E4D4D" />
                        {items.map((i) => (
                            <ListItem title={i.name} key={i.id} handleDeleteItem={handleDeleteItem} handleConfirm={handleConfirm} id={i.id} />
                        ))
                        }

                    </View>

                    :
                    <View>
                        <Button title="Agregar Juego" onPress={() => { setAddition(true) }} color="#4E4D4D" />
                        {items.map((i) => (
                            <ListItem title={i.name} key={i.id} handleDeleteItem={handleDeleteItem} handleConfirm={handleConfirm} id={i.id} />
                        ))
                        }

                    </View>
            }

        </>
    )

}

export default ListContainer