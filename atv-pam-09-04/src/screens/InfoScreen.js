import React from 'react';
import { View, Text } from 'react-native';

export default function InfoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Informações sobre o aplicativo</Text>
      <Text>Este é um catálogo simples de produtos para a atividade do professor Leandro e profesor Lucas feito por Gabriel Lobato.</Text>
    </View>
  );
}
