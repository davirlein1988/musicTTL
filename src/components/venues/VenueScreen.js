import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView,Button, TouchableOpacity } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import VenueCard from '../ui/VenueCard';
import { fetchVenues } from '../../services/venueService';



class VenueScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            venues: []
         }
         this.arrayHolder = []
    }
    componentDidMount(){
        this.loadArtists()
    }

    loadArtists = async () =>{
        const results = await fetchVenues()
        this.setState({
            venues: results,
            loading: false
        })
    }



    renderSeparator = () => {
        return (
            <View
            style={{
            marginTop: 10,
            }}
            />
        )
    }

    searchFilterFunction = text => {
        this.setState({
          value: text,
        });


        const newData = this.arrayHolder.filter(item => {
            const itemData = `${item.name.toUpperCase()}`
            const textData = text.toUpperCase()

            return itemData.indexOf(textData) > -1;
        })
        this.setState({
            data: newData,
        });
    }


    renderHeader = () => {
        return (<SearchBar
        placeholder="Search Venues..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
         />
        );
    }
    handleSelectItem(item){
        this.props.navigation.navigate(
            'VenueDetails',

            {id: `${item.id}`,
            name: `${item.name}`
        })
    }
    render() {
        const { navigate } = this.props.navigation;

        if(this.state.loading){
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
              </View>
            );
        }
        return (
            <View style={{ flex: 1 }}>
                {this.renderHeader()}
                {this.renderSeparator()}
                <ScrollView >
                    {this.state.venues.map(venue =>
                    <TouchableOpacity onPress={()=> this.handleSelectItem(venue)}>
                        <VenueCard {...venue}/>
                    </TouchableOpacity>  )}
                </ScrollView>
            </View>
         );
    }
}

export default VenueScreen;
