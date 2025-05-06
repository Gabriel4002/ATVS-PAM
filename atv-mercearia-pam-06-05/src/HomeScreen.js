// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';


export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img-frutas.png')} style={styles.image} />
      <Text style={styles.title}>Entregamos {'\n'}mantimentos à{'\n'} sua porta</Text>
      <text style={styles.text}>A mercearia oferece vegetais e frutas frescas.{'\n'} Encomende itens frescos na mercearia.</text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>INICIAR         →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'montserrat',
    textAlign: 'center',
    marginTop: '',
    
  },
  text: {
    fontSize: 12,
    fontFamily: 'montserrat',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: 160,
    height: 240,
    
  },
   button: {
    backgroundColor: '#7785DB',
    paddingVertical: 20,
    paddingHorizontal: 42,
    borderRadius: 30,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'space-between', // borda arredondada
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});
