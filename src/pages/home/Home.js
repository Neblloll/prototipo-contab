import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// import { Button } from "../../components/Buttons";
import { faClock, faX } from "@fortawesome/free-solid-svg-icons";
import { Avatar, Button, Card, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Home() {

    const [visible, setVisible] = useState(false);

    const showDialog = () => setVisible(true);
  
    const hideDialog = () => setVisible(false);
  

    return(
        <PaperProvider>
        <View style = {styles.container} >

            {/* <ScrollView
                
                alignItems = 'center'
                showsVerticalScrollIndicator
            > */}
            
                {/* <View style = {{flex: 1, width: '90%'}}>

                    <Button name = {'Nota Ciclano'} description = {'Compra'} color={"#FA7B7A"} icon={faX} />
                    <Button name = {'Nota Beltrano'} description = {'Compra'} color={"#FCF999"} icon={faClock} />

                </View> */}

                {/* <Card>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                    <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                    </Card.Actions>
                </Card> */}
                <Button onPress={showDialog}>Show Dialog</Button>
                <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Alert</Dialog.Title>
                    <Dialog.Content>
                    <Text variant="bodyMedium">This is simple dialog</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                    <Button onPress={hideDialog}>Done</Button>
                    </Dialog.Actions>
                </Dialog>
                </Portal>

            {/* </ScrollView> */}

        </View>
    </PaperProvider>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

})