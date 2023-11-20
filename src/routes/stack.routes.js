import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/welcome/Welcome';
import Login from '../pages/login/Login';
import TabRoutes from "./tab.routes";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function StackRoutes({ navigation }) {

    const [nomeRota, setNomeRota] = useState()

    const navegaAdmin = navigation => navigation.navigate(nomeRota);

    return(
        
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen 
                name = 'Welcome'
                component = {Welcome}
            />
            
            <Stack.Screen 
                name = 'Login'
                component = {Login}
            />

            <Stack.Screen 
                name = 'TabRoutes'
                component = {() => < TabRoutes navegador={(e) => {
                    setNomeRota(e)
                    navegaAdmin()}}/>}
            />

        </Stack.Navigator>
    );
}