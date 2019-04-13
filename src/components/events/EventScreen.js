import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import SimpleRow from '../ui/SimpleRow';
import { fetchEvents } from '../../services/eventService';


class EventScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            events: []
         }
         this.arrayHolder = []
    }
    componentDidMount(){
        this.loadEvents()
    }

    loadEvents = async () =>{
        const results = await fetchEvents()
        this.setState({
            events: results,
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
        placeholder="Search Artist..."
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
                <ScrollView>
                    {this.state.events.map(event => <SimpleRow {...event} /> )}
                </ScrollView>
            </View>
         );
    }
}

export default EventScreen;
