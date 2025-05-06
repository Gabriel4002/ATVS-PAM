import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PesquisaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Pesquisa</Text>
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
