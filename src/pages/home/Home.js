import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { Button } from "../../components/Buttons";
import { faClock, faX } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

    return(

        <View style = {styles.container} >

            <ScrollView
                
                alignItems = 'center'
                showsVerticalScrollIndicator
            >
            
                <View style = {{flex: 1, width: '90%'}}>

                    <Button name = {'Nota Ciclano'} description = {'Compra'} color={"#FA7B7A"} icon={faX} />
                    <Button name = {'Nota Beltrano'} description = {'Compra'} color={"#FCF999"} icon={faClock} />

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