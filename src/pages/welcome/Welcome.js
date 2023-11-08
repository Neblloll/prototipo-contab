import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function Welcome({ navigation }) {

    return(

        <View style = {{flex: 1, backgroundColor: '#075A90'}}>

            <Animatable.View 
                style = {styles.containerLogo}
                animation = 'fadeInUp' 
                delay = {500} 
            >
                <Image
                    style = {{resizeMode: 'contain', width: '55%'}}
                    source = {require('../../assets/logo.png')}
                />
            </Animatable.View>

            <Animatable.View 
                style = {styles.containerIntro}
                animation = 'fadeInUp'
                delay = {1000}
            >

                <Text style = {{fontSize: 19, fontWeight: 'bold', marginHorizontal: 20}}>Controle financeiro simplificado para uma gestão eficiente e intuitiva.</Text>

                <TouchableOpacity 
                    style = {styles.boxButton}
                    onPress = {() => navigation.navigate('Login')}
                >
                    <Text style = {{fontSize: 22, fontWeight: 'bold', color: '#FFF'}}>PRÓXIMO</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>

    );
}

const styles = StyleSheet.create({
    containerLogo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#075A90'
    },

    containerIntro: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#FFF',
    },

    boxButton: {
        height: 60,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#2BCDF9',
    }
});