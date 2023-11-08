import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function Login({ navigation }) {

    return(

        <View style = {{flex: 1, backgroundColor: '#075A90'}}>

            <View style = {styles.headerContainer}>
                <Animatable.Text
                    style = {styles.txtHeader}
                    animation = 'fadeInLeft'
                    delay = {500}
                >
                    BEM-VINDO(A)
                </Animatable.Text>
            </View>

            <Animatable.View
                style = {styles.formContainer}
                animation = 'fadeInUp'
                delay = {1000}
            >

                <View style = {styles.formContent}>

                    <Text style = {styles.formTxt}>Login</Text>
                    <TextInput 
                        style = {styles.formInput}
                        autoCapitalize = "none"
                    />

                    <Text style = {styles.formTxt}>Senha</Text>
                    <TextInput 
                        style = {styles.formInput}
                        autoCapitalize = "none"
                    />

                    <TouchableOpacity
                        style = {styles.formButton}
                        onPress = {() => {navigation.navigate('TabRoutes')}}
                    >
                        <Text style = {{fontSize: 22,fontWeight: 'bold', color: '#FFF'}}>ENVIAR</Text>
                    </TouchableOpacity>

                </View>

            </Animatable.View>

        </View>

    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#075A90'
    },

    txtHeader: {
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#FFF'
    },

    formContainer: {
        flex: 4,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#FFF'
    },

    formContent: {
        width: '100%',
        gap: 20,
        paddingTop: 40,
        paddingHorizontal: 50,
    },

    formTxt: {
        fontSize: 19,
    },

    formInput: {
        height: 40,
        fontSize: 18,
        marginBottom: 30,
        borderWidth: 2,
        paddingHorizontal: 20,
    },

    formButton: {
        height: 60,
        width: '60%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 60,
        borderRadius: 50,
        backgroundColor: '#2BCDF9',
    }
});