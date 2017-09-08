import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import MyImage from '../assets/images/my-icon.png';
import TeaStep1 from '../assets/images/step1-tea.jpg';
import TeaStep2 from '../assets/images/step2-tea.jpg';
import TeaStep3 from '../assets/images/step3-tea.jpg';
import TeaStep4 from '../assets/images/step4-tea.jpg';
import TeaStep5 from '../assets/images/step5-tea.jpg';


export default class TeaGuide extends React.Component {
  static navigationOptions = {
      title: 'How to Make Tea',
    };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.listTextTitle}>
             You Will Need:
            </Text>
            <View style={styles.listContainer}>
        <FlatList
          data={[
            {key: '- Teabag'},
            {key: '- Mug'},
            {key: '- Teaspoon'},
            {key: '- Milk'},
            {key: '- Boiling Hot Water'},
            {key: '- Sugar'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
            <Text style={styles.stepText}>
                1.) Place the teabag in the mug and if you want to, add your sugar.
            </Text>
                <Image source={TeaStep1} style={styles.stepImage}/>
            <Text style={styles.stepText}>
                2.) Pour the boiling hot water into your mug.
            </Text>
                <Image source={TeaStep2} style={styles.stepImage}/>
            <Text style={styles.stepText}>
                3.) Let it brew!
            </Text>
            <Text style={styles.stepText}>
                4.) Remove the teabag with the teaspoon.
            </Text>
                <Image source={TeaStep3} style={styles.stepImage}/>           
            <Text style={styles.stepText}>
                5.) Add the milk and give it a stir.
            </Text>
                <Image source={TeaStep4} style={styles.stepImage}/>  
            <Text style={styles.stepText}>
                6.) Enjoy your cup of tea!
            </Text>
                <Image source={TeaStep5} style={styles.stepImage}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fad6a5',
  },
  listContainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 15,
  },
  item: {
    padding: 2,
    fontSize: 18,
    textAlign: 'left',
  },
  teaTitle: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      paddingTop: 25,
      paddingHorizontal: 10,
  },
  stepText:{
      fontSize: 20,
      textAlign: 'left',
      paddingHorizontal: 10,
      paddingTop: 10,
      color: '#555555'
  },
  stepImage: {
      width: '95%',
      height: 200,
      paddingHorizontal: 10,
      alignItems: 'center',
      margin: 10,
      borderRadius: 10,
  },
  listTextTitle: {
      fontSize: 20,
      textAlign: 'left',
      paddingHorizontal: 10,
      paddingTop: 20,
      fontWeight: 'bold',
  },
  listText: {
     fontSize: 20,
     textAlign: 'left',
     paddingHorizontal: 10,
     paddingTop: 5, 
  },
});
