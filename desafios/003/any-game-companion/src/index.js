import { View } from "react-native";

import { Header } from "./components";
import { Home } from "./screens";
import { styles } from "./styles";

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

const App = () => {

  const [loaded] = useFonts({
    UbuntuMonoRegular: require('../assets/fonts/UbuntuMono-Regular.ttf'),
    UbuntuMonoItalic: require('../assets/fonts/UbuntuMono-Italic.ttf'),
    UbuntuMonoBold: require('../assets/fonts/UbuntuMono-Bold.ttf')
  })

  return (
    <>
      {
        !loaded ?
            <AppLoading />
          :

          <View style={styles.container}>
            <Header title="Any Game Companion" />
            <Home />
          </View>
      }
    </>
  );
};

export default App;
