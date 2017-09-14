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
import CoffeeStep1 from '../assets/images/step1-coffee.jpg';
import CoffeeStep2 from '../assets/images/step2-coffee.jpg';
import CoffeeStep3 from '../assets/images/step3-coffee.jpg';
import CoffeeStep4 from '../assets/images/step4-coffee.jpg';

export default class CoffeeGuide extends React.Component {
  static navigationOptions = {
    title: 'How to Make Coffee'
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
            {key: '- Coffee'},
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
                1.) Place the coffee in the mug and if you want to, add your sugar.    
            </Text>
                <Image source={CoffeeStep1} style={styles.coffeeStepImage}/>   
            <Text style={styles.stepText}>
                2.) Pour the milk into your mug. 
            </Text>
                <Image source={CoffeeStep2} style={styles.coffeeStepImage}/>  
            <Text style={styles.stepText}>
                3.) Pour in the boiling hot water.   
            </Text>
                <Image source={CoffeeStep3} style={styles.coffeeStepImage}/>
            <Text style={styles.stepText}>
                4.) Give it a stir!     
            </Text>
                <Image source={CoffeeStep4} style={styles.coffeeStepImage}/>
            <Text style={styles.stepText}>
                6.) Enjoy your cup of coffee!
            </Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#EFCFB6',
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
  coffeeStepImage: {
      width: '95%',
      height: 200,
      margin: 10,
      alignItems: 'center',
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
