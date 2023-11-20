import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import { ButtonForm, FormRegister } from "../../components/FormRegister";
import { Button, Snackbar } from "react-native-paper";
import NotaFiscal from "../../services/sqlite/NFE";
import { useRoute } from '@react-navigation/native';


export default function RegisterNFE({ onClose = () => {} }) {

    const route = useRoute();

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

    //
    const [numero, setNumero] = useState()
    const [dataDeEmissao, setDataDeEmissao] = useState()
    const [codVerfificacao, setCodVerificacao] = useState()
    const [issRetido, setIssRetido] = useState()
    const [competencia, setCompetencia] = useState()
    const [valorLiquido, setValorLiquido] = useState()
    const [baseDeCalculo, setBaseDeCalculo] = useState()
    const [valor, setValor] = useState()
    const [codTributacaoMunicipal, setCodTributacaoMunicipal] = useState()
    const [desconto, setDesconto] = useState()
    const [discriminacaoDosServicos, setDiscriminacaoDosServicos] = useState()
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

    const confirmaDados = () => {
        if(numero){
            NotaFiscal.create({numero: numero, dataDeEmissao: dataDeEmissao, codVerfificacao: codVerfificacao, issRetido: issRetido, competencia: competencia, valorLiquido: valorLiquido, baseDeCalculo: baseDeCalculo, valor: valor, codTributacaoMunicipal: codTributacaoMunicipal, desconto: desconto, discriminacaoDosServicoss: discriminacaoDosServicos, cpfCnpj: cpfOuCnpj, razaoReduzida: razaoReduzida, bairro: bairro, uf: uf, pagamento: pagamento, vencimento: vencimento, juros: juros, valorPago: valorPago, dataImportacao: dataImportacao, impostoRetido: impostoRetido, jurosMultaAbandono: jurosAbonado, mesAno: mesAno, concluded: false})
            .then((id, numero) => {
                console.log(`\n\n\n\nNota fiscal criada com id: ${id} e numero: ${numero}\n\n\n\n`)
                setNumero('')
                setDataDeEmissao('')
                setCodVerificacao('')
                setIssRetido('')
                setCompetencia('')
                setValorLiquido('')
                setBaseDeCalculo('')
                setValor('')
                setCodTributacaoMunicipal('')
                setDiscriminacaoDosServicos('')
                setCpfOuCnpj('')
                setRazaoReduzida('')
                setBairro('')
                setUf('')
                setPagamento('')
                setVencimento('')
                setJuros('')
                setValorPago('')
                setDataImpotacao('')
                setImpostoRetido('')
                setJurosAbonado('')
                setMesAno('')
            })
            .catch((err) => console.log(`\n\n\n\n${err}\n\n\n\n`))
        }
    }

    const [dadosEditar, setDadosEditar] = useState(route.params ? route.params.dados : null)

    return(

        <View style = {styles.container}>

            <View style = {styles.titleContainer}>
                <View style = {styles.titleTracer} />
                <Text style = {styles.titleText}>CADASTRAR NFE's</Text>
                <View style = {styles.titleTracer} />
            </View>

            <Text>{dadosEditar ? dadosEditar.id : "nada"}</Text>

            <ScrollView
                style = {{width: '90%'}}
                showsVerticalScrollIndicator = {false}
            >
                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Número'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setNumero(e)
                    }} data={numero}/>
                    <FormRegister titleInput = {'Data de emissão'} width={'45%'} type={'numeric'} onClose={(e) => {
                      setDataDeEmissao(e)  
                    }} data={dataDeEmissao}/>
                    
                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Cod. Verificação'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setCodVerificacao(e)
                    }} data={codVerfificacao ? codVerfificacao : null}/>
                    <FormRegister titleInput = {'Iss retido'} width={'45%'} type={'numeric'} onClose={(e) => { 
                        setIssRetido(e)
                    }} data={issRetido ? issRetido : null}/>

                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Competência'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setCompetencia(e)
                    }} data={competencia}/>
                    <FormRegister titleInput = {'Valor liquido'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setValorLiquido(e)
                    }} data={valorLiquido}/>

                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Base de cálculo'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setBaseDeCalculo(e)
                    }} data={baseDeCalculo}/>
                    <FormRegister titleInput = {'Valor'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setValor(e)
                    }} data={valor}/>

                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Cod. contributação'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setCodTributacaoMunicipal(e)
                    }} data={codTributacaoMunicipal}/>
                    <FormRegister titleInput = {'Desconto'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setDesconto(e)
                    }} data={desconto}/>

                </View>

                <FormRegister titleInput = {'Discriminação dos serviços'} height={200} multiline={true} onClose={(e) => {
                    setDiscriminacaoDosServicos(e)
                }} data={discriminacaoDosServicos}/>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'CPF/CNPJ'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setCpfOuCnpj(e)
                    }} data={cpfOuCnpj}/>
                    <FormRegister titleInput = {'Razão Reduzida'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setRazaoReduzida(e)
                    }} data={razaoReduzida}/>

                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Bairro'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setBairro(e)
                    }} data={bairro}/>
                    <FormRegister titleInput = {'UF'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setUf(e)
                    }} data={uf}/>

                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Pagamento'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setPagamento(e)
                    }} data={pagamento}/>
                    <FormRegister titleInput = {'Vencimento'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setVencimento(e)
                    }} data={vencimento}/>

                </View>
                
                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Juros'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setJuros(e)
                    }} data={juros}/>
                    <FormRegister titleInput = {'Valor pago'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setValorPago(e)
                    }} data={valorPago}/>

                </View>

                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Importada em'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setDataImpotacao(e)
                    }} data={dataImportacao}/>
                    <FormRegister titleInput = {'Imposto Retido'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setImpostoRetido(e)
                    }} data={impostoRetido}/>

                </View>
                
                <View style = {styles.formHorizontal}>

                    <FormRegister titleInput = {'Juros Abonada'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setJurosAbonado(e)
                    }} data={jurosAbonado}/>
                    <FormRegister titleInput = {'Mês/Ano'} width={'45%'} type={'numeric'} onClose={(e) => {
                        setMesAno(e)
                    }} data={mesAno}/>

                </View>

                <ButtonForm pressionado={() => confirmaDados()}/>

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