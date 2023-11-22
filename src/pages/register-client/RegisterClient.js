import React, { useEffect, useState } from "react";
import { View, StyleSheet,Text, ScrollView } from "react-native";
import Cliente from "../../services/sqlite/Cliente";

import {FormRegister, ButtonForm} from "../../components/FormRegister";
import { Snackbar, ActivityIndicator } from "react-native-paper";
import { useRoute } from '@react-navigation/native';
import Clients from "../clients/Clients";

export default function RegisterClient({ onClose = () => {} }) {

    const route = useRoute();

    const [dadosEditar, setDadosEditar] = useState(route.params ? route.params.dados : null)

    useEffect(() => {
        preencheDados()
    }, [])

    const [conferirDados, setConferirDados] = useState(false)

    const preencheDados = () => {
        if(dadosEditar){
            setNomeRazaoSocial(dadosEditar.nomeRazaoSocial)
            setCpfOuCnpj(dadosEditar.cpfOuCnpj)
            setInscricaoMunicipal(dadosEditar.inscricaoMunicipal)
            setCep(dadosEditar.cep)
            setUf(dadosEditar.uf)
            setEndereco(dadosEditar.endereco)
            setNumeroEndereco(dadosEditar.numeroEndereco)
            setComplementoEndereco(dadosEditar.complementoEndereco)
            setBairro(dadosEditar.bairro)
            setTelefone(dadosEditar.telefone)
            setEmail(dadosEditar.email)
            setRazaoReduzida(dadosEditar.razaoReduzida)
            setDataDeCadastro(dadosEditar.dataDeCadastro)
            setIndicacao(dadosEditar.indicacao)
            setComissao(dadosEditar.comissao)
        }
        setConferirDados(true)
    }

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
    const [indicacao, setIndicacao] = useState()
    const [comissao, setComissao] = useState()

    const limparDados = () => {
        setNomeRazaoSocial('')
        setCpfOuCnpj('')
        setInscricaoMunicipal('')
        setCep('')
        setUf('')
        setEndereco('')
        setNumeroEndereco('')
        setComplementoEndereco('')
        setBairro('')
        setTelefone('')
        setEmail('')
        setRazaoReduzida('')
        setDataDeCadastro('')
        setIndicacao('')
        setComissao('')
    }

    const confirmaDados = async () => {

        let criado = false

        if(nomeRazaoSocial && !dadosEditar){
            await Cliente.create({nomeRazaoSocial:nomeRazaoSocial, cpfOuCnpj:cpfOuCnpj, inscricaoMunicipal:inscricaoMunicipal, cep:cep, uf:uf, endereco:endereco, numeroEndereco:numeroEndereco, complemento: complementoEndereco, bairro: bairro, telefone: telefone, email: email, razaoReduzida: razaoReduzida, dataDeCadastro: dataDeCadastro, indicacao: indicacao, comissao: comissao})
            .then(() => {
                console.log("criado")
                setRespostaPost(200)
                setMensagem("Cadastrado com sucesso!")
                openSnackBar()   
                criado = true
            } )
            .catch( err => {
                console.log(err)
                chamaError()
            })
        }else if(nomeRazaoSocial && dadosEditar){
            await Cliente.update(dadosEditar.id, {nomeRazaoSocial:nomeRazaoSocial, cpfOuCnpj:cpfOuCnpj, inscricaoMunicipal:inscricaoMunicipal, cep:cep, uf:uf, endereco:endereco, numeroEndereco:numeroEndereco, complemento: complementoEndereco, bairro: bairro, telefone: telefone, email: email, razaoReduzida: razaoReduzida, dataDeCadastro: dataDeCadastro, indicacao: indicacao, comissao: comissao})
            .then((id, numero) => {
                setRespostaPost(200)
                setMensagem("Editado com sucesso!")
                openSnackBar()   
                criado = true
            })
            .catch((err) => console.log(`\n\n\n\n${err}\n\n\n\n`))
        }
        else{
            setRespostaPost(404)
            setMensagem("Faltam dados para terminar registro")
            openSnackBar()
        }
        if(criado === true){
            setDadosEditar(null)
            limparDados()
            onClose()
            route.params.dados = null
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

            {conferirDados ? <ScrollView
                style = {{width: '90%'}}
                showsVerticalScrollIndicator = {false}
            >

                <FormRegister titleInput = {'Nome/Razão Social'} data={nomeRazaoSocial} onClose={(e) => {
                    console.log(e)
                    setNomeRazaoSocial(e)
                    }}/>
                
                <FormRegister titleInput = {'CPF/CNPJ'} type = {'numeric'} data={cpfOuCnpj} onClose={(e) => {setCpfOuCnpj(e.replace(/[^0-9.,]+/g, ''))}} palceHolder="XXX.XXX.XXX-XX"/>
                
                <FormRegister titleInput = {'Inscrição Municipal'} data={inscricaoMunicipal} onClose={(e) => {setInscricaoMunicipal(e)}}/>

                <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>

                    <FormRegister titleInput = {'CEP'} width={'55%'} type = {'numeric'} data={cep} onClose={(e) => {setCep(e.replace(/[A-z]+/g, ''))}} palceHolder="XXXXX-XXX"/>
                    <FormRegister titleInput = {'UF'} width={'35%'} data={uf} onClose={(e) => {setUf(e)}}/>

                </View>                    

                <FormRegister titleInput = {'Endereço'} data={endereco} onClose={(e) => {setEndereco(e)}}/>

                <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>

                    <FormRegister titleInput = {'Número'} width={'35%'} type = {'numeric'} data={numeroEndereco} onClose={(e) => {setNumeroEndereco(e.replace(/[^0-9.,]+/g, ''))}}/>
                    
                    <FormRegister titleInput = {'Complemento'} width={'55%'} data={complementoEndereco} onClose={(e) => {setComplementoEndereco(e)}}/>

                </View>

                
                <FormRegister titleInput = {'Bairro'} data={bairro} onClose={(e) => {setBairro(e)}}/>
                
                <FormRegister titleInput = {'Telefone'} type = {'numeric'} data={telefone} onClose={(e) => {setTelefone(e.replace(/[A-z]+/g, ''))}} palceHolder="(XX) XXXXX-XXXX"/>
                
                <FormRegister titleInput = {'Email'} type = {'email-address'} data={email} onClose={(e) => {setEmail(e)}} palceHolder="exemplo@email.com"/>
                
                <FormRegister titleInput = {'Razão Reduzida'} data={razaoReduzida} onClose={(e) => {setRazaoReduzida(e)}}/>
                
                <FormRegister titleInput = {'Data de Cadastro'} type = {'numeric'} data={dataDeCadastro} onClose={(e) => {setDataDeCadastro(e.replace(/[^0-9/]+/g, ''))}} palceHolder="XX/XX/XXXX"/>
                
                <FormRegister titleInput = {'Indicação'} data={indicacao} onClose={(e) => {setIndicacao(e)}}/>
                
                <FormRegister titleInput = {'Comissão'} type = {'numeric'} data={comissao} onClose={(e) => {setComissao(e.replace(/[^0-9.,]+/g, ''))}} palceHolder="R$"/>

                <ButtonForm pressionado={() => {confirmaDados()}}/>

            </ScrollView> : <ActivityIndicator color="#5ED9FC" size={100} style={styles.loading} animating={true} />}

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
    loading: {
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 240
    }
})