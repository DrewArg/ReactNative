import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { BoardGames, GameDetail } from "../screens"
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

        </Stack.Navigator>
    )
}

export default GamesNavigator