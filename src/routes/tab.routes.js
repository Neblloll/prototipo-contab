import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, BackHandler, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Concluded from "../pages/concluded/Concluded";
import RegisterNFE from "../pages/register-nfe/RegisterNFE";
import Home from "../pages/home/Home";
import RegisterClient from "../pages/register-client/RegisterClient";
import Clients from "../pages/clients/Clients";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faFileCircleCheck, faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";

library.add(faFileCirclePlus, faFileCircleCheck)

const Tab = createBottomTabNavigator();

export default function TabRoutes() {

    useEffect(() => {
        const backAction = () => {
          Alert.alert('Alerta!', 'Deseja realmete sair?', [
            {
              text: 'Não',
              onPress: () => null,
              style: 'Cancel',
            },
            {text: 'Sim', onPress: () => BackHandler.exitApp()},
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
    }, []);

    return (

        <Tab.Navigator
            initialRouteName = 'home'
            backBehavior = "none"
            screenOptions = {{
                title: '',

                tabBarShowLabel: false,

                headerTitleAlign: 'center',

                headerTitleStyle: {
                    fontSize: 25,
                    color: '#FFF',
                },

                headerStyle: {
                    borderWidth: 0,
                    elevation: 0,
                    backgroundColor: '#1A3D73',
                },

                tabBarStyle: {
                    height: 55,
                    borderWidth: 0,
                    elevation: 0,
                    backgroundColor: '#0F4C82',
                }
            }}>

            <Tab.Screen
                name = 'concluded'
                component ={Concluded}
                options = {{
                    headerTitle: 'CONLUÍDO',
                    tabBarIcon: ({ size, color, focused }) => (
                        (focused)?
                        (
                            <View style = {styles.containerFocusIcon}>
                                <View style = {styles.focusIcon} />
                                <FontAwesomeIcon icon={faFileCircleCheck} size = {size + 7} color = {'#2BCDF9'} />
                            </View>
                        )
                        :
                        <FontAwesomeIcon icon={faFileCircleCheck} size = {size + 2} color = {'#FFF'} />
                    )
                }}
            />

            <Tab.Screen
                name = 'register-nfe'
                component ={RegisterNFE}
                options = {{
                    headerTitle: 'CADASTRO NFE',
                    tabBarIcon: ({ size, color, focused }) => (
                        (focused)?
                        (
                            <View style = {styles.containerFocusIcon}>
                                <View style = {styles.focusIcon} />
                                <FontAwesomeIcon icon={faFileCirclePlus} size = {size + 7} color = {'#2BCDF9'} />
                            </View>
                        )
                        :
                        <FontAwesomeIcon icon={faFileCirclePlus} size = {size + 2} color = {'#FFF'} />
                    )
                }}
            />

            <Tab.Screen
                name = 'home'
                component ={Home}
                options = {{
                    headerTitle: 'MENU',
                    tabBarIcon: ({ size, color, focused }) => (
                        (focused)?
                        (
                            <View style = {styles.containerFocusIcon}>
                                <View style = {styles.focusIcon} />
                                <FontAwesomeIcon icon={faFile} size = {size + 7} color = {'#2BCDF9'} />
                            </View>
                        )
                        :
                        <FontAwesomeIcon icon={faFile} size = {size + 2} color = {'#FFF'} />
                    )
                }}
            />

            <Tab.Screen
                name = 'register-client'
                component ={RegisterClient}
                options = {{
                    headerTitle: 'CADASTRO CLIENTE',
                    tabBarIcon: ({ size, color, focused }) => (
                            (focused)?
                            (
                                <View style = {styles.containerFocusIcon}>
                                    <View style = {styles.focusIcon} />
                                    <FontAwesome5 name = 'user-plus' size = {size + 7} color = {'#2BCDF9'} />
                                </View>
                            )
                            :
                            <FontAwesome5 name = 'user-plus' size = {size} color = {'#FFF'} />
                        )
                    }}
            />

            <Tab.Screen
                name = 'clients'
                component ={Clients}
                options = {{
                    headerTitle: 'CLIENTES',
                    tabBarIcon: ({ size, color, focused }) => (
                        (focused)?
                        (
                            <View style = {styles.containerFocusIcon}>
                                <View style = {styles.focusIcon} />
                                <FontAwesome5 name = 'user-alt' size = {size + 7} color = {'#2BCDF9'} />
                            </View>
                        )
                        :
                        <FontAwesome5 name = 'user-alt' size = {size} color = {'#FFF'} />
                    )
                }}
            />

        </Tab.Navigator>
        
    );
}

const styles = StyleSheet.create({
    containerFocusIcon: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    focusIcon: {
        height: 4,
        width: 80,
        bottom: 9,
        borderRadius: 3,
        backgroundColor: '#2BCDF9'
    }
});
