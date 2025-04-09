import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function DetalhesScreen({ route }) {
  // Pegando o produto enviado pela navegação
  const { produto } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: produto.imagem }} style={styles.imagem} />
      <View style={styles.detalhesContainer}>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.preco}>{produto.preco}</Text>
        <Text style={styles.descricao}>{produto.descricao}</Text>
      </View>
    </ScrollView>
  );
}

// Estilos para a tela de detalhes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  imagem: {
    width: 250, // Faz a imagem ocupar toda a largura
    height: 250,   // Definindo uma altura fixa para a imagem
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 100,
  },
  detalhesContainer: {
    alignItems: 'center', // Centraliza os itens dentro do contêiner
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  preco: {
    fontSize: 20,
    color: '#555',
    marginBottom: 20,
  },
  descricao: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center', // Centraliza o texto da descrição
    marginBottom: 30,
  },
});
