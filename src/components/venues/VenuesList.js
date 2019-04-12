import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { fetchVenues } from '../../services/venueService';
import SimpleRow from '../ui/SimpleRow';


class VenueList extends Component {
    constructor(props){
        super(props)
        this.state = { 
            loading: true,
            venues: []
         }
         this.arrayHolder = []
    }
    componentDidMount(){
        this.loadVenues()
    }

    loadVenues = async () =>{
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
            height: 1,
            width: '86%',
            backgroundColor: '#CED0CE',
            marginLeft: '14%',
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
        placeholder="Search Venue..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
         />
        );
    }
    
    render() { 
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
                    {this.state.venues.map(venue => <SimpleRow {...venue} /> )}
                </ScrollView>
            </View>
         );
    }
}
 
export default VenueList;