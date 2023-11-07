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

                    <FormRegister titleInput = {'Número'} />

                    <FormRegister titleInput = {'Data de emissão'} />

                    <FormRegister titleInput = {'Cod. Verificação'} />

                    <FormRegister titleInput = {'Iss retido'} />

                    <FormRegister titleInput = {'Competência'} />

                    <FormRegister titleInput = {'Valor liquido'} />

                    <FormRegister titleInput = {'Base de cálculo'} />

                    <FormRegister titleInput = {'Valor'} />

                    <FormRegister titleInput = {'Cod. tributação municipal'} />

                    <FormRegister titleInput = {'Desconto'} />

                    <FormRegister titleInput = {'Discriminação dos serviços'} />

                    <FormRegister titleInput = {'CPF/CNPJ'} />

                    <FormRegister titleInput = {'Razão Reduzida'} />

                    <FormRegister titleInput = {'Bairro'} />

                    <FormRegister titleInput = {'UF'} />

                    <FormRegister titleInput = {'Pagamento'} />

                    <FormRegister titleInput = {'Vencimento'} />

                    <FormRegister titleInput = {'Juros'} />

                    <FormRegister titleInput = {'Valor pago'} />

                    <FormRegister titleInput = {'Importada em'} />

                    <FormRegister titleInput = {'Imposto Retido'} />

                    <FormRegister titleInput = {'Juros/Multa Abonada'} />

                    <FormRegister titleInput = {'Mês/Ano'} />

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