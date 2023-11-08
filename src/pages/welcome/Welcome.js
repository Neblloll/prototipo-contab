import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
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

                <Button 
                    style = {styles.boxButton}
                    contentStyle = {{
                        height: 70,
                        alignSelf: 'center'
                    }}
                    labelStyle ={{
                        color: '#FFF',
                        fontSize: 17
                    }}
                    onPress = {() => navigation.navigate('Login')}
                >
                    PRÓXIMO
                </Button>
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
        width: '50%',
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: '#2BCDF9',
    }
});