import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/index';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BoardGames"
    >
      <Stack.Screen
        name="BoardGames"
        component={Home}
        options={{
          headerShown: true,
        }}
      />

      {/* <Stack.Screen name='GameDetail' component={null} /> */}

    </Stack.Navigator>
  );
};

export default ShopNavigator;