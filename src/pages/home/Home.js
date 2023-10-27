import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { Button } from "../../components/Buttons";

export default function Home() {

    return(

        <View style = {styles.container} >

            <ScrollView
                
                alignItems = 'center'
                showsVerticalScrollIndicator
            >
            
                <View style = {{flex: 1, width: '90%'}}>

                    <Button name = {'Mercado'} description = {'Compra'} />
                    <Button name = {'Mercado'} description = {'Compra'} />
                    <Button name = {'Mercado'} description = {'Compra'} />
                    <Button name = {'Mercado'} description = {'Compra'} />
                    <Button name = {'Mercado'} description = {'Compra'} />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                   

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