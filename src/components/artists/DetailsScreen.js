import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView,Button, TouchableOpacity } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import SimpleCard from '../ui/SimpleCard';
import { fetchOne } from '../../services/artistService';
import Carousel from './Slider';



class DetailsScreen extends React.Component {
  
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('id'),
  })
    
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            artist: null
         }
    }
    componentDidMount(){
        this.loadArtist()
    }
    

    loadArtist = async () =>{      
        const results = await fetchOne('235727052')
        this.setState({
            artist: results,
            loading: false
        })
    }

    render() {
      const images = [
        {
          source: {
            uri: 'https://source.unsplash.com/random/300x300/?music',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/301x300/?music',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/300x301/?music',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/310x305/?music',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/310x300/?music',
          },
        },
        {
          source: {
            uri: 'https://source.unsplash.com/random/307x305/?music',
          },
        },
        
      ];
      const { navigation } = this.props
      const id = navigation.getParam('id')
      
      if(this.state.loading){
          return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <ActivityIndicator />
            </View>
          );
      }
      return (
          <ScrollView key={this.state.artist.id} style={{ flex: 1 }}>
            <Text>{this.state.artist.stage_name}</Text>
            <Text>{`${this.state.artist.first_name} ${this.state.artist.last_name}`}</Text>
            <Carousel images={images} />
            <TouchableOpacity>
              <Text>{id || 'Hello'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{color: 'black', backgroundColor: 'trasparent'}} title="Genres">
            <Text>Genres</Text>
            {this.state.artist.genres.map(genre => (
              <Text>{genre}</Text>
            ))}
            </TouchableOpacity>
            <Text>{this.state.artist.description}</Text>
            <Text>Location based... {this.state.artist.location}</Text>
            <Text>email: {this.state.artist.contact_email}</Text>
            <Button
            title="Shows of this artist"
            onPress={()=> alert("future shows and performances....")}
             />         
          </ScrollView>
       );
      }   
    
}

export default DetailsScreen;
