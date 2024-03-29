import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from './styles'

const Home = ({ navigation }) => {

  const handleGames = () => {
    navigation.navigate('Juegos');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Any Game Companion</Text>
      <Button onPress={handleGames} title={"Ver Juegos"} />
      <Text style={styles.footnote}>Más adelante se podrán agregar cantidad de jugadores y la tabla de puntuaciones para cada juego.</Text>
    </View>
  );
};

export default Home;
