import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView,Button, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel from '../artists/Slider';
import { fetchOne } from '../../services/artistService';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

const styles = StyleSheet.create({
    subtitle: {
      fontSize:16,
      color: "#808080",
      marginTop: 5,
      paddingHorizontal: 16,
    },
    content:{
      marginBottom:5,
      fontSize:18,
      fontWeight: 'normal',
      color: "#000000",
      marginTop:20,
      marginBottom:20,
      paddingHorizontal: 16,
    },
    buttonContainer: {
     height:45,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     marginRight:35,
     marginLeft:35,
     marginBottom:20,
     width:300,
     borderRadius:30,
     backgroundColor:'transparent',
    },
    Button: {
      backgroundColor: "#812F81",
      shadowColor: "#808080",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,

      elevation: 19,
    },
    loginText: {
      color: 'white',
      fontSize:14,
    }
})

class VenueDetails extends React.Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('name'),
  })

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            venue: null
         }
    }


    loadVenue = async () =>{
        const {params } =  this.props.navigation.state;
        const result = await fetchOne(`${'https://musicttlmd-staging.herokuapp.com/api/v1/venues/'}${params.id}`)
        this.setState({
            venue: result,
            loading: false
        })
    }
    componentDidMount(){
      this.loadVenue()
    }


    render() {
      const images = [
        {
          source: {
            uri: 'https://source.unsplash.com/random/1080x1920/?concert',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/1080x1920/?concert',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/800x600/?concert',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/310x305/?jazz',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/800x600/?concert',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/507x605/?piano',
          },
        },

      ];
      const { navigation } = this.props
      const { params } = this.props.navigation.state;
      const id = navigation.getParam('id')

      if(this.state.loading){
          return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <ActivityIndicator />
            </View>
          );
      }
      return (
        <ScrollView key={this.state.venue.id} style={{ flex: 1 }}>
            <Carousel
            style={styles.card}
            images={images}
            initialNumToRender={2}
            sensitiveScroll={false}
            />
            <CardAction>
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

            <View>
              <Text style={styles.subtitle}>Location: {this.state.venue.location}</Text>
              <Text style={styles.content}>{this.state.venue.description}</Text>
            </View>
            <TouchableOpacity style={[styles.buttonContainer, styles.Button]} onPress={()=> alert("future events....")}>
              <Text style={styles.loginText}>Next events</Text>
            </TouchableOpacity>
        </ScrollView>


       );
      }

}

export default VenueDetails;
