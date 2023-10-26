import React from "react";
import { View, StyleSheet,Text, ScrollView } from "react-native";

import {FormRegisterClient, ButtonForm} from "../../components/FormRegisterClient";

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

                    <FormRegisterClient titleInput = {'Nome/Razão Social'} />
                    <FormRegisterClient titleInput = {'CPF/CNPJ'} type = {'numeric'} />
                    <FormRegisterClient titleInput = {'Inscrição Municipal'} />
                    <FormRegisterClient titleInput = {'Endereço'} />

                    <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>

                        <View style = {{width: '35%'}}>
                            <FormRegisterClient titleInput = {'Número'} type = {'numeric'} />
                        </View>

                        <View style = {{width: '60%'}}>
                            <FormRegisterClient titleInput = {'Complemento'} />
                        </View>

                    </View>

                    <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>

                        <View style = {{width: '60%'}}>
                            <FormRegisterClient titleInput = {'CEP'} type = {'numeric'} />
                        </View>

                        <View style = {{width: '35%'}}>
                            <FormRegisterClient titleInput = {'UF'} />
                        </View>

                    </View>                    

                    <FormRegisterClient titleInput = {'Bairro'} />
                    <FormRegisterClient titleInput = {'Telefone'} type = {'numeric'} />
                    <FormRegisterClient titleInput = {'Email'} type = {'email-adress'} />
                    <FormRegisterClient titleInput = {'Razão Reduzida'} />
                    <FormRegisterClient titleInput = {'Data de Cadastro'} type = {'numeric'} />
                    <FormRegisterClient titleInput = {'Indicação'} />
                    <FormRegisterClient titleInput = {'Comissão'} type = {'numeric'} />

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