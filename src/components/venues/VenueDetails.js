import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView,Button, TouchableOpacity, StyleSheet } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
import { fetchOne } from '../../services/artistService';

const styles = StyleSheet.create({
    card: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
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
        <ScrollView
        key={this.state.venue.id}
        >  
            <Text>Gallery</Text>
            <GallerySwiper
            images={[
                // Version *1.1.0 update (or greater versions): 
                // Can be used with different image object fieldnames.
                // Ex. source, source.uri, uri, URI, url, URL
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
                
                { source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" } },
                { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" },
                { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg" },
                { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
            ]}
            initialNumToRender={2}
            sensitiveScroll={false}
            />
            <TouchableOpacity>
                <Text>{this.state.venue.location}</Text>
                <Text>{this.state.venue.contact_email}</Text>
                <Text>{this.state.venue.description && "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla. Vitae semper quis lectus nulla. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Fringilla ut morbi tincidunt augue interdum. A lacus vestibulum sed arcu. Vel risus commodo viverra maecenas accumsan. Vitae congue eu consequat ac felis donec et odio pellentesque. Ullamcorper malesuada proin libero nunc consequat interdum.Ac tincidunt vitae semper quis lectus nulla at. Integer enim neque volutpat ac tincidunt. Quis vel eros donec ac odio tempor orci dapibus ultrices. Lacus vel facilisis volutpat est velit egestas dui. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Lacus sed viverra tellus in hac habitasse platea dictumst. Erat nam at lectus urna duis convallis convallis tellus id. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Habitasse platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Malesuada fames ac turpis egestas sed tempus. Mi eget mauris pharetra et ultrices neque ornare. Turpis nunc eget lorem dolor sed viverra. Lectus proin nibh nisl condimentum."}</Text>
                <Text>Administration: </Text>
                <Button title="See more"/>
                <Button title="Share"/>
            </TouchableOpacity>
        </ScrollView>
        
        
       );
      }   
    
}

export default VenueDetails;
