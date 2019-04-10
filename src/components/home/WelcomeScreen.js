import React, {Component} from 'react'
import { View, Button, StyleSheet, Text, ImageBackground } from 'react-native';
class WelcomeScreen extends Component {
    render() { 
        return ( 
          <ImageBackground
            source={require('../../assets/guitar.jpg')}
            style={styles.container}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', }}>
              <Button title="login" onPress={() => this.props.navigation.navigate("Login")} />
              <Text style={styles.button}> Welcome to MusicTT </Text>
              <Button title="Home" onPress={()=> this.props.navigation.navigate("Dashboard")}/>
            </View>
            
            </ImageBackground>
          
         );
      }
    }
 
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  button: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  }
})