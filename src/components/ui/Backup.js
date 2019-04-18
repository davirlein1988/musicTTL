import React from 'react';
import { Button, View, Text } from 'react-native';
import SimpleCard from '../ui/SimpleCard';

class DetailsScreen extends React.Component {
    static navigationOptions = {
      title: 'Details',
    };
  
    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      
  
      return (       
          
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
      );
    }
  }

  export default DetailsScreen;