import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Cliente from "../../services/sqlite/Cliente";
import { Button } from "../../components/Buttons";
import { Text } from "react-native";

export default function Clients() {

    const [clientes, setClientes] = useState()

    useEffect(() => {
       Cliente.all()
        .then(clientes => setClientes(clientes))
        console.log(clientes)
    }, [])

    return(

        <View style = {styles.container} >

            <ScrollView
                
                alignItems = 'center'
                showsVerticalScrollIndicator
            >
            
                <View style = {{flex: 1, width: '90%'}}>
                    {clientes ? clientes.map((e) => (
                        <Button name = {e.nomeRazaoSocial} description = {e.cpfOuCnpj} />
                    )) : <Text>SEM CLIENTES CADASTRADOS</Text>}

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