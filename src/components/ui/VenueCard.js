import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

const styles = StyleSheet.create({
    card: {
      paddingHorizontal: 16,
    },
    image: {

    },
    title: {
        color: "#eee",
        alignSelf: 'center',
        fontSize: 20,
        padding: 10,
    },

    action: {
      marginTop: 0,
    },

    button: {

    }

})

const VenueCard = props => (
    <Card style={styles.card}>
        <CardImage source={{uri: 'https://picsum.photos/200/300/?random'}} title={props.name}/>
    </Card>
)

export default VenueCard;
