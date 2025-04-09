import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as telas
import HomeScreen from './src/screens/HomeScreen';
import ProdutosScreen from './src/screens/ProdutosScreen';
import DetalhesScreen from './src/screens/DetalhesScreen';
import InfoScreen from './src/screens/InfoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Produtos" component={ProdutosScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        <Stack.Screen name="Informações" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
