import { Text, View, Button } from "react-native"
import { styles } from "./styles";

const ListItem = ({ title, id }) => {

    return (
        <View style={styles.container}>
            <Text id={id}>{title}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Editar" onPress={() => null} color="#4E4D4D" />
                <Button title="Borrar" onPress={() => null} color="#4E4D4D" />
            </View>
        </View>
    )
}

export default ListItem