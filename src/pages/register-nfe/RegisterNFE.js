import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import { ButtonForm, FormRegister } from "../../components/FormRegister";
import { Snackbar } from "react-native-paper";
import NFE from "../../services/sqlite/NFE";

export default function RegisterNFE({ onClose = () => {} }) {

    const [visible, setVisible] = useState(false)
    const [mensagem, setMensagem] = useState()
    const [respotaPost, setRespostaPost] = useState()

    const openSnackBar = () => {
        setVisible(true)
    }

    const closeSnackBar = () => {
        setVisible(false)
    }

    const chamaError = () => {
        setRespostaPost(404)
        setMensagem("Erro não identificado - tente novamente")
        openSnackBar()
    }

    // useEffect(() => {
    //     createNota()
    // }, [])

    //
    const [numero, setNumero] = useState()
    const [dataDeEmissao, setDataDeEmissao] = useState()
    const [codVerfificacao, setCodVerificacao] = useState()
    const [issRetido, setIssRetido] = useState()
    const [competencia, setCompetencia] = useState()
    const [valorLiquido, setValorLiquido] = useState()
    const [baseDeCalculo, setBaseDeCalculo] = useState()
    const [valor, setValor] = useState()
    const [codContribuicao, setCodContribuicao] = useState()
    const [descont, setDesconto] = useState()
    const [descriminacaoDoServico, setDescriminacaoDoServico] = useState()
    const [cpfOuCnpj, setCpfOuCnpj] = useState()
    const [razaoReduzida, setRazaoReduzida] = useState()
    const [bairro, setBairro] = useState()
    const [uf, setUf] = useState()
    const [pagamento, setPagamento] = useState()
    const [vencimento, setVencimento] = useState()
    const [juros, setJuros] = useState()
    const [valorPago, setValorPago] = useState()
    const [dataImportacao, setDataImpotacao] = useState()
    const [impostoRetido, setImpostoRetido] = useState()
    const [jurosAbonado, setJurosAbonado] = useState()
    const [mesAno, setMesAno] = useState()
    const [concluded, setConcluded] = useState()

    const createNota = () => {
        let query = [{numero: "7309872859", concluded: "false", vencimento: "04/11/2023"}]
        NFE.create(query)
        .then((id, numero) => console.log(`Nota criado com \nid: ${id}\nNumero: ${numero}`))
        .catch((err) => console.log(err))
    }

    const chamaOnClose = () => {
        onClose("teste")
    }

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

                <FormRegister titleInput = {'Discriminação dos serviços'} height={200} multiline={true} />

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

                <ButtonForm pressionado={() => chamaOnClose()}/>

            </ScrollView>

            <Snackbar
                    visible={visible}
                    duration={2000}
                    onDismiss={closeSnackBar}
                    style={respotaPost === 200 ? {backgroundColor: "rgba(71,248,30,0.8)"} : {backgroundColor: "rgba(255,82,82,0.8)"}}
                    >
                    <Text style={{textAlign: "center", color: "white"}}>{mensagem}</Text>
            </Snackbar>

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