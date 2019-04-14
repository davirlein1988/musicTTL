import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-ionicons'

import { 
  createSwitchNavigator,
  createAppContainer, 
  createDrawerNavigator, 
  createBottomTabNavigator, 
  createStackNavigator } from 'react-navigation'


import WelcomeScreen from './components/home/WelcomeScreen';
import Login from './components/auth/Login';

import VenueScreen from './components/venues/VenueScreen';
import EventScreen from './components/events/EventScreen';
import ArtistScreen from './components/artists/ArtistScreen';
import DetailsScreen from './components/artists/DetailsScreen';

import VenueDetails from './components/venues/VenueDetails';
import EventDetails from './components/events/EventDetails';


class App extends Component {
  render() {
    return <AppContainer/>
  }
}

export default App;



const Artists = createStackNavigator({
  Artists: {
    screen: ArtistScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'List Of Artists',
        headerLeft: (
          <Icon 
        style={{paddingLeft: 10}}
        onPress={()=> navigation.openDrawer()}
        name="md-menu" size={30} />
        )
      }
    }
  },
  DetailsScreen: {
    screen: DetailsScreen
  }
},
{
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
})


const Venues = createStackNavigator({
  Venues: {
    screen: VenueScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'List of venues',
        headerLeft: (
          <Icon 
        style={{paddingLeft: 10}}
        onPress={()=> navigation.openDrawer()}
        name="md-menu" size={30} />
        )
      }
    }
  },
  VenueDetails: {
    screen: VenueDetails
  }
},
{
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
})

const Events = createStackNavigator({
  Events: {
    screen: EventScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Future shows',
        headerLeft: (
          <Icon 
        style={{paddingLeft: 10}}
        onPress={()=> navigation.openDrawer()}
        name="md-menu" size={30} />
        )
      }
    }
  },
  EventDetails: {
    screen: EventDetails
  }
},
{
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
})

Artists.navigationOptions = {
  tabBarIcon: ({focused, tintColor}) => (
    <Ionicons name={`ios-microphone`} size={25} color={tintColor} />
  ),
}

Venues.navigationOptions = {
  tabBarIcon: ({focused, tintColor}) => (
    <Ionicons name={`ios-radio`} size={25} color={tintColor} />
  ),
}
Events.navigationOptions = {
  tabBarIcon: ({focused, tintColor}) => (
    <Ionicons name={`ios-musical-notes`} size={25} color={tintColor} />
  ),
}

const HomeTabNavigator = createBottomTabNavigator(
  {
  Artists,
  Venues,
  Events
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      }
    },
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#eee',
      },
    }
  })

const DashboardStackNavigator = createStackNavigator(
  {
  HomeTabNavigator: HomeTabNavigator
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: <Icon 
        style={{paddingLeft: 10}}
        onPress={()=> navigation.openDrawer()}
        name="md-menu" size={30} />
      }
    }
  },
  
  )

  


const AppDrawerNavigator = createDrawerNavigator({
  Options: {
    screen: DashboardStackNavigator
  },
  Account : {
    screen: Login
  }
})

const AppSwithNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Dashboard: {screen: AppDrawerNavigator},
  Login: {screen: Login }
})
const AppContainer = createAppContainer(AppSwithNavigator);


 


 