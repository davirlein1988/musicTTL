import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, ScrollView,Button, TouchableOpacity } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import SimpleCard from '../ui/SimpleCard';
import { fetchArtists } from '../../services/artistService';



class ArtistScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            artists: []
         }
         this.arrayHolder = []
    }
    componentDidMount(){
        this.loadArtists()
    }

    loadArtists = async () =>{
        const results = await fetchArtists()
        this.setState({
            artists: results,
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
        placeholder="Search Artist..."
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
            'DetailsScreen',

            {id: `${item.id}`,
            stage_name: `${item.stage_name}`
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

                <ScrollView>
                    {this.state.artists.map(artist =>
                    <TouchableOpacity onPress={()=> this.handleSelectItem(artist)}>
                        <SimpleCard {...artist}/>
                    </TouchableOpacity>  )}
                </ScrollView>
            </View>
         );
    }
}

export default ArtistScreen;
