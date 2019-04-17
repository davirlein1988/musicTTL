import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, ScrollView,Button, TouchableOpacity } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { fetchOne } from '../../services/venueService';

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
  loginButton: {
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

class VenueDetails extends React.Component {

    static navigationOptions = ({navigation}) => ({
      headerTitle: navigation.getParam('title'),
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
          const results = await fetchOne(params.id)
          this.setState({
              venue: results,
              loading: false
          })
      }
      componentDidMount(){
        this.loadVenue()
      }


      render() {

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
              <View style={styles.container}>
                <Text style={styles.content}>{this.state.venue.name}</Text>
              </View>
              <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={()=> alert("future events....")}>
                <Text style={styles.loginText}>Events on this venue</Text>
              </TouchableOpacity>

            </ScrollView>

         );
        }

  }


export default VenueDetails;
