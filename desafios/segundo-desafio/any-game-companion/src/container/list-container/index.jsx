import { View, Text } from "react-native"
import { ListItem } from "../../components"
import { styles } from "./styles";


const ListContainer = () => {

 // Esta lista se recibiria de una API y no seria hardcodeada
    const items = [
        { id: '001', name: "Catán" },
        { id: '002', name: "Munchkin" },
        { id: '003', name: "T.E.G" },
        { id: '004', name: "RISK" },
        { id: '005', name: "Monopoly" },
        { id: '006', name: "10 Mil" },
        { id: '007', name: "Póker" },
    ];

    return (
        <View>
            {items.map((i) => (
                <ListItem title={i.name} key={i.id} />
            ))
            }

        </View>
    )

}

export default ListContainer