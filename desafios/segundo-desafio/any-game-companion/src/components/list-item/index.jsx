import { Text, View, Button } from "react-native"
import { styles } from "./styles";

const ListItem = ({ title, id, handleDeleteItem, handleEditItem }) => {



    return (
        <View style={styles.container}>
            <Text style={styles.title} id={id}>{title}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Editar" onPress={() => handleEditItem} color="#4E4D4D" />
                <Button title="Borrar" onPress={() => handleDeleteItem} color="#4E4D4D" />
            </View>
        </View>
    )
}

export default ListItem