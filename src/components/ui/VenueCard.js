import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

const styles = StyleSheet.create({
    card: {

    },
    image: {

    },
    title: {

    },
    button: {

    }

})

const VenueCard = props => (
    <Card>
        <CardImage source={{uri: 'http://placehold.it/480x270'}} title={props.name}/>
        <CardTitle subtitle={props.location}/>
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