import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export function FormRegister({ titleInput, type}) {

    return(
        <View style = {styles.containerInput}>
            <Text style = {styles.titleInput}>{titleInput}</Text>
            <TextInput
                style = {styles.contentInput}
                keyboardType = {type || 'default'}
                autoCapitalize = "words"
            />
        </View>
    );
};

export function ButtonForm() {

    return(
        <View>
            <TouchableOpacity style = {styles.buttonFormContainer}>
                <Text style = {{color: '#FFF', fontSize: 20}}>ENVIAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    containerInput: {
        minWidth: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
    },

    titleInput: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    contentInput: {
        height: 40,
        width: '100%',
        fontSize: 17,
        marginTop: 15,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000'
    },

    buttonFormContainer: {
        height: 65,
        minWidth: '65%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 40,
        borderRadius: 20,
        backgroundColor: '#075A90',
    },
})