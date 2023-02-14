import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PlayerListContainer from "../container/player-container"
import { ScoreCounter } from "../screens"
import { screenOptions } from "./screenOptions"

const Stack = createNativeStackNavigator()

const ScoreNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="ScoreCounter"
            screenOptions={
                screenOptions
            }>

            <Stack.Screen
                name="ScoreCounter"
                component={ScoreCounter}
                options={() => ({

                })} />


            <Stack.Screen
                name="Players"
                component={PlayerListContainer}
                options={({ route }) => ({
                    // playerQty: route.params.playerQty
                })} />

        </Stack.Navigator>
    )
}

export default ScoreNavigator