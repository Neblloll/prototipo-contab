import React, { useState } from "react";
import { View, StyleSheet,Text, ScrollView } from "react-native";
import Cliente from "../../services/sqlite/Cliente";

import {FormRegister, ButtonForm} from "../../components/FormRegister";

export default function RegisterClient() {

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
            Cliente.create({nomeRazaoSocial:nomeRazaoSocial, cpfOuCnpj:cpfOuCnpj, inscricaoMunicipal:inscricaoMunicipal, cep:cep, uf:uf, endereco:endereco, numeroEndereco:numeroEndereco})
            .then( (id) => console.log(`Cliente criado com \nid: ${id}\nNome / Razão Social: ${nomeRazaoSocial}`) )
            .catch( err => console.log(err) )
        } else{
            console.log("faltam dados")
        }
    }

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

                    {/* {cep ? <Text>{cep}</Text> : null} */}

                    <FormRegister titleInput = {'Nome/Razão Social'} data={nomeRazaoSocial} onClose={(e) => {setNomeRazaoSocial(e)}}/>

                    <FormRegister titleInput = {'CPF/CNPJ'} type = {'numeric'} data={cpfOuCnpj} onClose={(e) => {setCpfOuCnpj(e)}}/>

                    <FormRegister titleInput = {'Inscrição Municipal'} data={inscricaoMunicipal} onClose={(e) => {setInscricaoMunicipal(e)}}/>

                    <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>

                        <View style = {{width: '60%'}}>
                            <FormRegister titleInput = {'CEP'} type = {'numeric'} data={cep} onClose={(e) => {setCep(e)}}/>
                        </View>

                        <View style = {{width: '35%'}}>
                            <FormRegister titleInput = {'UF'} data={uf} onClose={(e) => {setUf(e)}}/>
                        </View>

                    </View>                    

                    <FormRegister titleInput = {'Endereço'} data={endereco} onClose={(e) => {setEndereco(e)}}/>

                    <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>

                        <View style = {{width: '35%'}}>
                            <FormRegister titleInput = {'Número'} type = {'numeric'} data={numeroEndereco} onClose={(e) => {setNumeroEndereco(e)}}/>
                        </View>

                        <View style = {{width: '60%'}}>
                            <FormRegister titleInput = {'Complemento'} data={complementoEndereco} onClose={(e) => {setComplementoEndereco(e)}}/>
                        </View>

                    </View>

                    <FormRegister titleInput = {'Bairro'} data={bairro} onClose={(e) => {setBairro(e)}}/>
                    <FormRegister titleInput = {'Telefone'} type = {'numeric'} data={telefone} onClose={(e) => {setTelefone(e)}}/>
                    <FormRegister titleInput = {'Email'} type = {'email-address'} data={email} onClose={(e) => {setEmail(e)}}/>
                    <FormRegister titleInput = {'Razão Reduzida'} data={razaoReduzida} onClose={(e) => {setRazaoReduzida(e)}}/>
                    <FormRegister titleInput = {'Data de Cadastro'} type = {'numeric'} data={dataDeCadastro} onClose={(e) => {setDataDeCadastro(e)}}/>
                    <FormRegister titleInput = {'Indicação'} data={indicaao} onClose={(e) => {setIndicacao(e)}}/>
                    <FormRegister titleInput = {'Comissão'} type = {'numeric'} data={comissao} onClose={(e) => {setComissao(e)}}/>

                    <ButtonForm pressionado={() => confirmaDados()}/>

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