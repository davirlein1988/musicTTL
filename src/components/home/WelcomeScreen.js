import React, {Component} from 'react'
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground } from 'react-native';
class WelcomeScreen extends Component {
    render() { 
        return ( 
          <ImageBackground
            source={require('../../assets/guitar.jpg')}
            style={styles.container}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column', }}>
              <Text style={styles.text}> Welcome to MusicTT </Text>
              <TouchableOpacity style={styles.loginScreenButton}  title="Continue..." onPress={()=> this.props.navigation.navigate("Dashboard")}
              underlayColor='#fff'>
              <Text style={styles.loginText}>Continue...</Text>
              </ TouchableOpacity>
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
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  loginScreenButton:{
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
}
})