import React from 'react';
import { View, Text, Button, } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo a Loja Marabanha!</Text>
      <Button
        title="Ver Produtos"
        onPress={() => navigation.navigate('Produtos')}
      />
      <Button
      style = {{marginTop:1000}}
        title="Informações"
        onPress={() => navigation.navigate('Informações')}
      />
    </View>
  );
}
