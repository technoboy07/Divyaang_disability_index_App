import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types'; // Import the type

type MainpageNavigationProp = StackNavigationProp<RootStackParamList, 'Mainpage'>;

type Props = {
  navigation: MainpageNavigationProp;
};

const Mainpage: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.fullContainer}>
      <Text style={styles.title}>Divyaan Index Surveying App</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Calculator')}>
          <Text style={styles.text}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Second')}>
          <Text style={styles.text}>Congenital</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Second')}>
          <Text style={styles.text}>Acquired Causes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Second')}>
          <Text style={styles.text}>Neurological</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Second')}>
          <Text style={styles.text}>Musculoskeletal</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    fullContainer: {
      flex: 1,
      backgroundColor: '#A499C0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      alignItems: 'center',
      backgroundColor: '#A499C0',
      marginTop: 20,
    },
    title: {
      fontSize: 24,
      fontFamily: 'cambay',
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginTop: 50,
    },
    box: {
      width: 300, // Set a fixed width for uniformity
      height: 80, // Set a fixed height for uniformity
      margin: 10,
      backgroundColor: '#3F2A7F',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
  });
  
  export default Mainpage;
  

