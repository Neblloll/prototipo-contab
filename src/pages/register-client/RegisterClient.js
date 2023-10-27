import React from "react";
import { View, StyleSheet,Text, ScrollView } from "react-native";

import {FormRegister, ButtonForm} from "../../components/FormRegister";

export default function RegisterClient() {

    return(

        <View style = {styles.container}>

            <View style = {styles.titleContainer}>
                <View style = {styles.titleTracer} />
                <Text style = {styles.titleText}>CADASTRAR CLIENTE</Text>
                <View style = {styles.titleTracer} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator = {false}
                alignItems = 'center'
            >

                <View style = {{flexDirection: 'column', width: '90%'}}>

                    <FormRegister titleInput = {'Nome/Razão Social'} />
                    <FormRegister titleInput = {'CPF/CNPJ'} type = {'numeric'} />
                    <FormRegister titleInput = {'Inscrição Municipal'} />

                    <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>

                        <View style = {{width: '60%'}}>
                            <FormRegister titleInput = {'CEP'} type = {'numeric'} />
                        </View>

                        <View style = {{width: '35%'}}>
                            <FormRegister titleInput = {'UF'} />
                        </View>

                    </View>                    

                    <FormRegister titleInput = {'Endereço'} />

                    <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>

                        <View style = {{width: '35%'}}>
                            <FormRegister titleInput = {'Número'} type = {'numeric'} />
                        </View>

                        <View style = {{width: '60%'}}>
                            <FormRegister titleInput = {'Complemento'} />
                        </View>

                    </View>

                    <FormRegister titleInput = {'Bairro'} />
                    <FormRegister titleInput = {'Telefone'} type = {'numeric'} />
                    <FormRegister titleInput = {'Email'} type = {'email-address'} />
                    <FormRegister titleInput = {'Razão Reduzida'} />
                    <FormRegister titleInput = {'Data de Cadastro'} type = {'numeric'} />
                    <FormRegister titleInput = {'Indicação'} />
                    <FormRegister titleInput = {'Comissão'} type = {'numeric'} />

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
        width: '20%',
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