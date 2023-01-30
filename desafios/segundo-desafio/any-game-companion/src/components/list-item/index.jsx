import { Text, View, Button } from "react-native"
import { styles } from "./styles";

const ListItem = ({ title, id }) => {

    return (
        <View style={styles.container}>
            <Text id={id}>{title}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Editar" onPress={() => null} color="#C4C9E9" />
                <Button title="Borrar" onPress={() => null} color="#97A1D8" />
            </View>
        </View>
    )
}

export default ListItem