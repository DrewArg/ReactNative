import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { BoardGames, CaptureGame, GameDetail } from "../screens"
import { screenOptions } from "./screenOptions"

const Stack = createNativeStackNavigator()

const GamesNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Games"
            screenOptions={
                screenOptions
            }>
            <Stack.Screen
                name="Games"
                component={BoardGames}
                options={() => ({
                })} />

            <Stack.Screen
                name="GameDetail"
                component={GameDetail}
                options={({ route }) => ({
                    gameId: route.params.gameId,
                    title: route.params.title
                })} />

            <Stack.Screen name="CaptureGame" component={CaptureGame} options={{ title: "Carga de Imágen" }} />


        </Stack.Navigator>
    )
}

export default GamesNavigator