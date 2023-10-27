import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import { ButtonForm, FormRegister } from "../../components/FormRegister";

export default function RegisterNFE() {

    return(

        <View style = {styles.container}>

            <View style = {styles.titleContainer}>
                <View style = {styles.titleTracer} />
                <Text style = {styles.titleText}>CADASTRAR NFE's</Text>
                <View style = {styles.titleTracer} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator = {false}
                alignItems = 'center'
            >

                <View style = {{flexDirection: 'column', width: '90%'}}>

                    <FormRegister titleInput = {'Nome/Razão Social'} />

                    <ButtonForm />

                </View>

            </ScrollView>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    titleContainer: {
        height: 55,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleTracer: {
        height: 5,
        width: '24%',
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#000',
    },

    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
})