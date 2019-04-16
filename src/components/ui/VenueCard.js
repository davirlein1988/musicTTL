import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

const styles = StyleSheet.create({
    card: {

    },
    image: {

    },
    title: {
        color: "#eee",
        alignSelf: 'center',
        fontSize: 20,
        padding: 10,
    },
    
    button: {

    }

})

const VenueCard = props => (
    <Card>
        <CardImage source={{uri: 'https://picsum.photos/200/300/?random'}} title={props.name}/>
        <CardTitle style={{marginTop: 10}} subtitle={props.location}/>
        <CardContent text={props.description}/>
        <CardAction seperator={true} inColumn={false}>
            <CardButton
            onPress={() => {}}
            title="Liked it"
            color='red'
            />
            <CardButton
            onPress={() => {}}
            title="Share"
            color='blue'
            />
        </CardAction>
    </Card>
)

export default VenueCard;