import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { Button } from "../../components/Buttons";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export default function Concluded() {

    return(

        <View style = {styles.container} >

            <ScrollView
                
                alignItems = 'center'
                showsVerticalScrollIndicator
            >
            
                <View style = {{flex: 1, width: '90%'}}>

                    <Button name = {'Nota Fulano'} description = {'Compra'} color={"#B4FB97"} icon={faCheck}/>
                    {/* <Button name = {'Mercado'} description = {'Compra'} />
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