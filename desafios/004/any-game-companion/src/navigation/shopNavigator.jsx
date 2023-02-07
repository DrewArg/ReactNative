import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BoardGames, Home } from '../screens/index';
import { THEME } from '../constants/theme';


const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BoardGames" screenOptions={{
        headerStyle: {
          backgroundColor: THEME.colors.white,
        },
        headerTintColor: THEME.colors.primary,
        navigationBarColor: THEME.colors.secondary,
        headerTitleStyle: {
          fontSize: 18,
          color: THEME.colors.title,
        },
      }}
    >
      <Stack.Screen
        name="BoardGames"
        component={BoardGames}
        options={{
          headerShown: true,
        }}
      />

      {/* <Stack.Screen name='GameDetail' component={null} /> */}

    </Stack.Navigator >
  );
};

export default ShopNavigator;