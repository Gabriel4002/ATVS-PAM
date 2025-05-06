import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListaCompraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#050609',
  },
});
