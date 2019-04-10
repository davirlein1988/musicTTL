import React, {Component} from 'react'
import { View, Text, Button } from 'react-native';
class Feed extends Component {
    render() { 
        return ( 
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button  
            title="See more"
            onPress={()=> this.props.navigation.navigate('Details')}
              />
        </View>
         );
    }
}
 
export default Feed;