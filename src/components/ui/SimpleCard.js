import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, Button} from 'react-native';


const styles = StyleSheet.create({

  container:{
    flex:1,
    marginTop:20,
    paddingHorizontal: 16,
  },

  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    fontWeight: "bold",
    flex:1,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
});

const SimpleCard = props => (
  <View style={styles.container}>
    <View
    key={props.id}
    style={styles.card}>

      <Image style={styles.cardImage} source={{uri:'https://via.placeholder.com/200'}}/>

      <View style={styles.cardHeader}>
         <View>
           <Text style={styles.title}>{props.stage_name}</Text>
           <Text style={styles.time}>{props.genres.join(", ")}</Text>
         </View>
       </View>

      <View style={styles.cardFooter}>
        <View style={styles.socialBarContainer}>

          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/android/75/e74c3c/hearts.png'}}/>
              <Text style={styles.socialBarLabel}>78</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ios-glyphs/75/2ecc71/calendar.png'}}/>
              <Text style={styles.socialBarLabel}>25</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/metro/75/3498db/youtube.png'}}/>
              <Text rkType='primary4 hintColor' style={styles.socialBarLabel}>13</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

    </View>
  </View>

);



export default SimpleCard;
