import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import Reducers from './reducers/';
import LoginForm from './components/LoginForm';
import Icon from 'react-native-ionicons'

import { 
  createSwitchNavigator,
  createAppContainer, 
  createDrawerNavigator, 
  createBottomTabNavigator, 
  createStackNavigator } from 'react-navigation'


import DashboardScreen from './components/home/DashboardScreen';
import WelcomeScreen from './components/home/WelcomeScreen';
import Feed from './components/home/Feed';
import Profile from './components/home/Profile';
import Settings from './components/home/Settings';
import Login from './components/auth/Login';
import Details from './components/artists/Details';
import VenueScreen from './components/venues/VenueScreen';
import EventScreen from './components/events/EventScreen';
import ArtistScreen from './components/artists/ArtistScreen';
import VenueList from './components/venues/VenuesList';


class App extends Component {
  render() {
    return <AppContainer/>
  }
}

export default App;
const VenueStack = createStackNavigator({
  Venues: {
    screen: VenueList,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'List Of Venues',
        headerLeft: (
          <Icon 
        style={{paddingLeft: 10}}
        onPress={()=> navigation.openDrawer()}
        name="md-menu" size={30} />
        )
      }
    }
  },
  Details: {
    screen: Details
  }
})

const EventStack = createStackNavigator({
  Events: {
    screen: EventScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'List Of Events',
        headerLeft: (
          <Icon 
        style={{paddingLeft: 10}}
        onPress={()=> navigation.openDrawer()}
        name="md-menu" size={30} />
        )
      }
    }
  },
  Details: {
    screen: Details
  }
})

const ArtistStack = createStackNavigator({
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
  Details: {
    screen: Details
  }
})
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
  Details: {
    screen: Details
  }
},
{
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
})

const ProfileStack = createStackNavigator({
  Feed: {
    screen: Profile,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Profile',
        headerLeft: (
          <Icon 
        style={{paddingLeft: 10}}
        onPress={()=> navigation.openDrawer()}
        name="md-menu" size={30} />
        )
      }
    }
  }
})

const SettingStack = createStackNavigator({
  Artists: {
    screen: Settings,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Settings',
        headerLeft: (
          <Icon 
        style={{paddingLeft: 10}}
        onPress={()=> navigation.openDrawer()}
        name="md-menu" size={30} />
        )
      }
    }
  }
})


const HomeTabNavigator = createBottomTabNavigator(
  {
  Artists,
  ProfileStack,
  SettingStack
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
  Venues: {
    screen: VenueStack
  },
  Artists: {
    screen: ArtistStack
  },
  Events : {
    screen: EventStack
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


 


 