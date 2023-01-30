import React from "react";
import { Text, View } from "react-native";
import { ListContainer } from "../../container";

const Home = () => {
  return (
    <View>
      <Text>Lista de Juegos Disponibles</Text>
      <ListContainer />
      <Text>Más adelante se podrán agregar cantidad de jugadores y la tabla de puntuaciones para cada juego.</Text>
    </View>
  );
};

export default Home;
