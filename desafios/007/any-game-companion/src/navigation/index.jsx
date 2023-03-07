import { NavigationContainer } from '@react-navigation/native';

import TabsNavigator from './tabs'

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;