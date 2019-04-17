import React, { Component } from 'react';
import {  StyleSheet, View, Text, FlatList, ActivityIndicator, ScrollView, Button, TouchableOpacity } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { fetchOne } from '../../services/artistService';
import Carousel from './Slider';


const styles = StyleSheet.create({
  title:{
    fontSize:20,
    color: "#000000",
    flex:1,
  },
  tags:{
    fontSize:18,
    color: "#808080",
    marginTop: 5,
    paddingHorizontal: 16,
  },
  container:{
    flex:1,
    marginTop:20,
    marginBottom:20,
    paddingHorizontal: 16,
  },
  content:{
    marginBottom:5,
    fontSize:18,
    fontWeight: 'normal',
    color: "#000000",
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
});

class DetailsScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('stage_name'),
  })

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            artist: null
         }
    }


    loadArtist = async () =>{
        const {params } =  this.props.navigation.state;
        const results = await fetchOne(params.id)
        this.setState({
            artist: results,
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

          <ScrollView key={this.state.artist.id} style={{ flex: 1 }}>
            <Carousel images={images} />
            <Text style={styles.tags}>Genres: {this.state.artist.genres.join(", ")}</Text>
            <View style={styles.container}>
              <Text style={styles.content}>{this.state.artist.description}</Text>
            </View>

            <TouchableOpacity style={[styles.buttonContainer, styles.Button]} onPress={()=> alert("future shows and performances....")}>
              <Text style={styles.loginText}>Shows of this artis</Text>
            </TouchableOpacity>

          </ScrollView>

       );
      }

}

export default DetailsScreen;
