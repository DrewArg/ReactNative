import { NavigationContainer } from '@react-navigation/native';

import ShopNavigator from './shopNavigator';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;