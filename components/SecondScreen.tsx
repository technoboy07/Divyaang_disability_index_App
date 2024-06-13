import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondScreen = () => {
  return (
    <View style={styles.fullContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>UE Arm & Hand Compo</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>LE Mobility & Stability Compo</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: '#3F2A7F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#3F2A7F',
    marginTop: 20,
  },
  box: {
    width: '80%',
    padding: 40,
    margin: 10,
    backgroundColor: '#282454',
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

export default SecondScreen;
