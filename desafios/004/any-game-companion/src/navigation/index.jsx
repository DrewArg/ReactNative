import { NavigationContainer } from '@react-navigation/native';

import CompanionNavigator from './companionNavigator';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <CompanionNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;