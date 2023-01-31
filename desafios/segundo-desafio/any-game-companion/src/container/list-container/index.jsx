import { View } from "react-native"
import { ListItem } from "../../components"

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

    const handleConfirm = (id, name) => {
        if (!id) {
            throw new Error("El ID es obligatorio")
        }

        let index = items.findIndex(i => i.id === id)
        if (name) {
            items[index].name = name
        }
    }

    const handleDeleteItem = (id) => {
        if (!id) {
            throw new Error("El ID es obligatorio")
        }

        items.filter(i => { i.id !== id })
    }

    return (
        <View>
            {items.map((i) => (
                <ListItem title={i.name} key={i.id} handleDeleteItem={handleDeleteItem} handleConfirm={handleConfirm} id={i.id} />
            ))
            }

        </View>
    )

}

export default ListContainer