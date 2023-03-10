import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BoardGames, GameDetail, Home } from '../screens/index';
import { screenOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

const CompanionNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home" screenOptions={screenOptions}
    >

      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Juegos"
        component={BoardGames}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen name='GameDetail' component={GameDetail} options={{
        headerShown: true,
      }} />

    </Stack.Navigator >
  );
};

export default CompanionNavigator;