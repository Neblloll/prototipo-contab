import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Cliente from "../../services/sqlite/Cliente";
import { Button } from "../../components/Buttons";
import { Text } from "react-native";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Clients() {

    const [clientes, setClientes] = useState()
    const [clientesBuscados, setClientesBuscados] = useState(false)

    useEffect(() => {
        buscaClientes()
    }, [])

    const buscaClientes = async () => {
        await Cliente.all()
        .then(clientes => setClientes(clientes))
        setClientesBuscados(true)
    }

    return(

        <View style = {styles.container} >

            <ScrollView
                
                alignItems = 'center'
                showsVerticalScrollIndicator
            >
            
                <View style = {{flex: 1, width: '90%'}}>
                    {clientesBuscados ? [clientes ? clientes.map((e) => (
                        <Button name = {e.nomeRazaoSocial} description = {e.cpfOuCnpj} color={"#5ED9FC"} icon={faUser}/>
                    )) : <Text>SEM CLIENTES CADASTRADOS</Text>] : <Text>BUSCANDO</Text>}

                    {/* <Button name = {'Mercado'} description = {'Compra'} />
                    <Button name = {'Mercado'} description = {'Compra'} />
                    <Button name = {'Mercado'} description = {'Compra'} />
                    <Button name = {'Mercado'} description = {'Compra'} />
                    <Button name = {'Mercado'} description = {'Compra'} />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button /> */}
                   

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

})