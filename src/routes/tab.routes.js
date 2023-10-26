import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Concluded from "../pages/concluded/Concluded";
import RegisterNFE from "../pages/register-nfe/RegisterNFE";
import Home from "../pages/home/Home";
import RegisterClient from "../pages/register-client/RegisterClient";
import Clients from "../pages/clients/Clients";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    

    return (

        <Tab.Navigator>

            <Tab.Screen
                name = 'concluded'
                component ={Concluded}
            />

            <Tab.Screen
                name = 'register-nfe'
                component ={RegisterNFE}
            />

            <Tab.Screen
                name = 'home'
                component ={Home}
            />

            <Tab.Screen
                name = 'register-client'
                component ={RegisterClient}
            />

            <Tab.Screen
                name = 'clients'
                component ={Clients}
            />

        </Tab.Navigator>
        
    );
}