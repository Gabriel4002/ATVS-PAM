import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProdutosScreen({ navigation }) {
  // Lista de produtos com imagem, nome e preço
  const produtos = [
    { id: '1', nome: 'Camisa do Santos', preco: 'R$ 120,00', imagem: 'https://dcdn-us.mitiendanube.com/stores/005/041/425/products/imagem_2024-09-06_202319102-78551fe0eb86795fb017256650012503-1024-1024.png', descricao: '100% de fibra de poliéster, tecnologia de absorção de umidade ativa de células-tronco, exaustão a umidade da pele, para que você se sinta confortável, mantenha-se seco. Adequado para futebol, treinamento, concorrência; suor, respirável, muito confortável. Versão da camisa de futebol: Versão do fã Objeto aplicável: homens ' },
    { id: '2', nome: 'Conjunto Milan', preco: 'R$ 230,00', imagem: 'https://images.tcdn.com.br/img/img_prod/498725/conjunto_de_treino_ac_milan_2024_jaqueta_e_calca_de_treino_15686_1_54a66264da8265b0d6e741744a701f36.jpg', descricao: 'Conjunto de treino com jaqueta e calça da temporada 2024, feito com tecnologia que retém o suor, se ajustando ao seu corpo com todo o conforto que você precisa.' },
  ];

  // Função para renderizar um produto
  const renderProduto = (produto) => (
    <View style={styles.produtoContainer}>
      {/* Imagem do produto */}
      <Image source={{ uri: produto.imagem }} style={styles.imagem} />
      
      {/* Nome e preço do produto */}
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.preco}>{produto.preco}</Text>

      {/* Botão para acessar os detalhes do produto */}
      <TouchableOpacity
        style={styles.botaoDetalhes}
        onPress={() => navigation.navigate('Detalhes', { produto: produto })}
      >
        <Text style={styles.botaoText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Container com 2 produtos por linha */}
      <View style={styles.container}>
        {produtos.map((produto, index) => {
          // Agrupando 2 produtos por linha
          return (
            <View key={produto.id} style={[styles.produtoWrapper, index % 2 !== 0 && { marginLeft: 10 }]}>
              {renderProduto(produto)}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

// Estilos para a tela de produtos
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Organiza os itens em linha
    flexWrap: 'wrap', // Permite quebra de linha
    justifyContent: 'space-between', // Espaço entre os itens
    margin: 10,
  },
  produtoWrapper: {
    width: '48%', // Cada item ocupa quase 50% da largura
    marginBottom: 20, // Espaçamento entre os produtos
  },
  produtoContainer: {
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  imagem: {
    width: 120,
    height: 130,
    marginBottom: 10,
    borderRadius: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  preco: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  botaoDetalhes: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  botaoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
