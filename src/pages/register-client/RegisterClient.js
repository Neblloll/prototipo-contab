import React, { useState } from "react";
import { View, StyleSheet,Text, ScrollView } from "react-native";
import Cliente from "../../services/sqlite/Cliente";

import {FormRegister, ButtonForm} from "../../components/FormRegister";
import { Snackbar, TextInput } from "react-native-paper";

export default function RegisterClient() {

    const [visible, setVisible] = useState(false)
    const [mensagem, setMensagem] = useState()
    const [respotaPost, setRespostaPost] = useState()

    const openSnackBar = () => {
        setVisible(true)
    }

    const closeSnackBar = () => {
        setVisible(false)
    }

    // Dados
    const [nomeRazaoSocial, setNomeRazaoSocial] = useState()
    const [cpfOuCnpj, setCpfOuCnpj] = useState()
    const [inscricaoMunicipal, setInscricaoMunicipal] = useState()
    const [cep, setCep] = useState()
    const [uf, setUf] = useState()
    const [endereco, setEndereco] = useState()
    const [numeroEndereco, setNumeroEndereco] = useState()
    const [complementoEndereco, setComplementoEndereco] = useState()
    const [bairro, setBairro] = useState()
    const [telefone, setTelefone] = useState()
    const [email, setEmail] = useState()
    const [razaoReduzida, setRazaoReduzida] = useState()
    const [dataDeCadastro, setDataDeCadastro] = useState()
    const [indicaao, setIndicacao] = useState()
    const [comissao, setComissao] = useState()

    const confirmaDados = () => {
        if(nomeRazaoSocial && cpfOuCnpj && inscricaoMunicipal && cep && uf && endereco && numeroEndereco){
            let query = [{nomeRazaoSocial:nomeRazaoSocial, cpfOuCnpj:cpfOuCnpj, inscricaoMunicipal:inscricaoMunicipal, cep:cep, uf:uf, endereco:endereco, numeroEndereco:numeroEndereco}]
            Cliente.create(query)
            .then( (id) => {
                console.log(`Cliente criado com \nid: ${id}\nNome / Razão Social: ${nomeRazaoSocial}`)
                setNomeRazaoSocial()
                setCpfOuCnpj()
                setInscricaoMunicipal()
                setCep()
                setUf()
                setEndereco()
                setNumeroEndereco()
                setComplementoEndereco()
                setBairro()
                setTelefone()
                setEmail()
                setRazaoReduzida()
                setDataDeCadastro()
                setIndicacao()
                setComissao()
                setRespostaPost(200)
                setMensagem("Cadastrado com sucesso!")
                openSnackBar()
            } )
            .catch( err => {
                console.log(err)
                chamaError()
            })
        } else{
            setRespostaPost(404)
            setMensagem("Faltam dados para terminar registro")
            openSnackBar()
        }
    }

    const chamaError = () => {
        setRespostaPost(404)
        setMensagem("Erro não identificado - tente novamente")
        openSnackBar()
    }

    return(

        <View style = {styles.container}>

            <View style = {styles.titleContainer}>
                <View style = {styles.titleTracer} />
                <Text style = {styles.titleText}>CADASTRAR CLIENTE</Text>
                <View style = {styles.titleTracer} />
            </View>

            <ScrollView
                style = {{width: '90%'}}
                showsVerticalScrollIndicator = {false}
            >

                <FormRegister titleInput = {'Nome/Razão Social'} data={nomeRazaoSocial} onClose={(e) => {setNomeRazaoSocial(e)}}/>
                <FormRegister titleInput = {'CPF/CNPJ'} type = {'numeric'} data={cpfOuCnpj} onClose={(e) => {setCpfOuCnpj(e)}}/>
                <FormRegister titleInput = {'Inscrição Municipal'} data={inscricaoMunicipal} onClose={(e) => {setInscricaoMunicipal(e)}}/>

                <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>

                    <FormRegister titleInput = {'CEP'} width={'55%'} type = {'numeric'} data={cep} onClose={(e) => {setCep(e)}}/>
                    <FormRegister titleInput = {'UF'} width={'35%'} data={uf} onClose={(e) => {setUf(e)}}/>

                </View>                    

                <FormRegister titleInput = {'Endereço'} data={endereco} onClose={(e) => {setEndereco(e)}}/>

                <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>

                    <FormRegister titleInput = {'Número'} width={'35%'} type = {'numeric'} data={numeroEndereco} onClose={(e) => {setNumeroEndereco(e)}}/>
                    <FormRegister titleInput = {'Complemento'} width={'55%'} data={complementoEndereco} onClose={(e) => {setComplementoEndereco(e)}}/>

                </View>

                <FormRegister titleInput = {'Bairro'} data={bairro} onClose={(e) => {setBairro(e)}}/>
                <FormRegister titleInput = {'Telefone'} type = {'numeric'} data={telefone} onClose={(e) => {setTelefone(e)}}/>
                <FormRegister titleInput = {'Email'} type = {'email-address'} data={email} onClose={(e) => {setEmail(e)}}/>
                <FormRegister titleInput = {'Razão Reduzida'} data={razaoReduzida} onClose={(e) => {setRazaoReduzida(e)}}/>
                <FormRegister titleInput = {'Data de Cadastro'} type = {'numeric'} data={dataDeCadastro} onClose={(e) => {setDataDeCadastro(e)}}/>
                <FormRegister titleInput = {'Indicação'} data={indicaao} onClose={(e) => {setIndicacao(e)}}/>
                <FormRegister titleInput = {'Comissão'} type = {'numeric'} data={comissao} onClose={(e) => {setComissao(e)}}/>

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