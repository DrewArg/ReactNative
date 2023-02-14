import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BoardGames, Home } from '../screens'
import GamesNavigator from './GamesNavigator'

const BottomTab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <BottomTab.Navigator
            initialRouteName='home'
            screenOptions={{
                headerShown: true,
                tabBarLabelStyle: {
                    fontFamily: 'UbuntuMonoItalic',
                    fontSize: 12
                },
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray"
            }}
        >

            <BottomTab.Screen
                name='home'
                component={Home}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={25}
                            color="black"
                        />
                    )

                }}
            />

            <BottomTab.Screen
                name='Juegos'
                component={GamesNavigator}
                options={{
                    headerShown: true,
                    title: "Lista de Juegos",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'file-tray' : 'file-tray-outline'}
                            size={25}
                            color="black"
                        />
                    )

                }}
            />

        </BottomTab.Navigator>
    )
}

export default Tabs