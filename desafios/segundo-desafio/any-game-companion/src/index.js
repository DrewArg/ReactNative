import { View } from "react-native";

import { Header } from "./components";
import { Home } from "./screens";
import { styles } from "./styles";

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Any Game Companion" />
      <Home />
    </View>
  );
};

export default App;
