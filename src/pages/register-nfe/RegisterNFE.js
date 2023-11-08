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
                style = {{width: '90%'}}
                showsVerticalScrollIndicator = {false}
            >

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Número'} width={'45%'} type={'numeric'} />
                    <FormRegister titleInput = {'Data de emissão'} width={'45%'} type={'numeric'} />
                    
                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Cod. Verificação'} width={'45%'} type={'numeric'} />
                    <FormRegister titleInput = {'Iss retido'} width={'45%'} type={'numeric'} />

                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Competência'} width={'45%'} type={'numeric'} />
                    <FormRegister titleInput = {'Valor liquido'} width={'45%'} type={'numeric'} />

                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Base de cálculo'} width={'45%'} type={'numeric'} />
                    <FormRegister titleInput = {'Valor'} width={'45%'} type={'numeric'} />

                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Cod. tributação'} width={'45%'} type={'numeric'} />
                    <FormRegister titleInput = {'Desconto'} width={'45%'} type={'numeric'} />

                </View>

                <FormRegister titleInput = {'Discriminação dos serviços'} height={200} alignVTxt={'top'} multiline={true} />

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'CPF/CNPJ'} width={'45%'} type={'numeric'} />
                    <FormRegister titleInput = {'Razão Reduzida'} width={'45%'} type={'numeric'} />

                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Bairro'} width={'45%'} type={'numeric'} />
                    <FormRegister titleInput = {'UF'} width={'45%'} type={'numeric'} />

                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Pagamento'} width={'45%'} type={'numeric'} />
                    <FormRegister titleInput = {'Vencimento'} width={'45%'} type={'numeric'} />

                </View>
                
                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Juros'} width={'45%'} type={'numeric'} />
                    <FormRegister titleInput = {'Valor pago'} width={'45%'} type={'numeric'} />

                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Importada em'} width={'45%'} type={'numeric'} />
                    <FormRegister titleInput = {'Imposto Retido'} width={'45%'} type={'numeric'} />

                </View>
                
                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Juros Abonada'} width={'45%'} type={'numeric'} />
                    <FormRegister titleInput = {'Mês/Ano'} width={'45%'} type={'numeric'} />

                </View>

                <ButtonForm />

            </ScrollView>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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

    formHorizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})