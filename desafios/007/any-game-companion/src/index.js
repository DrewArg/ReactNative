import { ActivityIndicator, View } from "react-native";
import { Provider } from "react-redux";

import { styles } from "./styles";
import store from "./store";

import { useFonts } from 'expo-font';
import { colors } from "./constants";
import AppNavigation from "./navigation";

const App = () => {

  const [loaded] = useFonts({
    UbuntuMonoRegular: require('../assets/fonts/UbuntuMono-Regular.ttf'),
    UbuntuMonoItalic: require('../assets/fonts/UbuntuMono-Italic.ttf'),
    UbuntuMonoBold: require('../assets/fonts/UbuntuMono-Bold.ttf')
  })

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={colors.primary} />
      </View>
    )
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
};

export default App;
