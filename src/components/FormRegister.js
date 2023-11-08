import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export function FormRegister({ titleInput, width, height, alignVTxt, type, multiline, data, onClose = () =>{}}) {

    return(
        <View style = {[styles.containerInput, {width: width || '100%'}]}>

            <Text style = {styles.titleInput}>{titleInput}</Text>
            <TextInput
                style = {[styles.contentInput, {height: height || 40, textAlignVertical: alignVTxt || 'center', paddingVertical: alignVTxt ? 15 : 0}]}
                keyboardType = {type || 'default'}
                autoCapitalize = "words"
                multiline = {multiline || false}
                value={data}
                onChangeText={onClose}
            />
            
        </View>
    );
};

export function ButtonForm({ pressionado = () => {}}) {

    return(
        <View>
            <TouchableOpacity style = {styles.buttonFormContainer} onPress={pressionado}>
                <Text style = {{color: '#FFF', fontSize: 20}}>ENVIAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    containerInput: {
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
        width: '100%',
        fontSize: 18,
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