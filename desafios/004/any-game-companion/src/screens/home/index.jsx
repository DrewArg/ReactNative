import React from "react";
import { Text, View } from "react-native";
import { ListContainer } from "../../container";

import { styles } from './styles'

const Home = ({ navigation }) => {

  const onSelected = (item) => {
    navigation.navigate('Products', {
      categoryId: item.id,
      title: item.title,
    });
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Juegos Disponibles</Text>
      <ListContainer />
      <Text style={styles.footnote}>Más adelante se podrán agregar cantidad de jugadores y la tabla de puntuaciones para cada juego.</Text>
    </View>
  );
};

export default Home;
