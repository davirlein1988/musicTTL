import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView,Button, TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { ListItem, SearchBar } from 'react-native-elements';
import SimpleCard from '../ui/SimpleCard';
import { fetchOne } from '../../services/artistService';
import Carousel from '../artists/Slider'


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
    

    loadArtist = async () =>{     
        const {params } =  this.props.navigation.state;
        const result = await fetchOne(`${'https://musicttlmd-staging.herokuapp.com/api/v1/venues/'}${params.id}`)
        this.setState({
            venue: result,
            loading: false
        })
    }
    componentDidMount(){
      this.loadArtist()
    }
  

    render() {
      const images = [
        {
          source: {
            uri: 'https://source.unsplash.com/random/300x300/?concert',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/301x300/?concert',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/300x301/?concert',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/310x305/?jazz',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/310x305/?concert',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/307x305/?piano',
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
        
        <Card>
            <CardImage source={{uri: 'https://source.unsplash.com/random/300x300/?concert'}} title={this.state.venue.name}>
            </CardImage>
            <CardTitle subtitle={this.state.venue.location}/>
            <CardContent text={this.state.venue.description}/>
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
       );
      }   
    
}

export default VenueDetails;
