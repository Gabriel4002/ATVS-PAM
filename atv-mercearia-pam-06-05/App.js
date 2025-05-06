// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, ScrollView, TextInput,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { useFonts } from 'expo-font';





function MainScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={require('/assets/img-frutas.png')}  />
      <Text style={styles.title}>Entregamos {'\n'}mantimentos à{'\n'} sua porta</Text>
      <text style={styles.text}>A mercearia oferece vegetais e frutas frescas.{'\n'} Encomende itens frescos na mercearia.</text>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Principal')}>
        <Text style={styles.buttonText}>INICIAR         →</Text>
      </TouchableOpacity>
    </View>
  );
}
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>

      <Image
        source={{ uri: 'https://st4.depositphotos.com/29453910/37778/v/450/depositphotos_377785374-stock-illustration-hand-drawn-modern-man-avatar.jpg' }} // avatar temporário
        style={styles.avatar}
      />

      <Text style={styles.name}>João Silva</Text>
      <Text style={styles.email}>joao.silva@email.com</Text>

      <TouchableOpacity style={styles.buttonUser}>
        <Text style={styles.buttonTextUser}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonUser}>
        <Text style={styles.buttonTextUser}>Sair da Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
function PesquisaScreen() {
   return (
    <View style={styles.container}>
    
      <Text style={styles.location}>📍 Taboão da Serra, SP</Text>
      <TextInput style={styles.searchInput} placeholder="Pesquisar..." />

      <View style={styles.grid}>
        <Card title="Frutas" image={require('./assets/imagem-1.png')} color="#CDE2B2" />
        <Card title="Diversos" image={require('./assets/img-diversos.png')} color="#A9C9FF" />
        <Card title="Açougue" image={require('./assets/img-acougue.png')} color="#ECC2BE" />
        <Card title="Bebidas" image={require('./assets/img-frutas.png')} color="#A7FFF3" />
      </View>
    </View>
  );
}

const Card = ({ title, image, color }) => (
  <View style={[styles.card, { backgroundColor: color }]}>
    <Image source={image} style={styles.image} />
    <Text>{title}</Text>
  </View>
);

function CarrinhoScreen() {
   return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Meu carrinho</Text>
      <Item title="Frutas" total="50,00" items="5" image={require('./assets/imagem-1.png')} />
      <Item title="Diversos" total="35,40" items="6" image={require('./assets/img-diversos.png')} />
      <Item title="Açougue" total="56,44" items="3" image={require('./assets/img-acougue.png')} />

      <View style={styles.footer}>
        <View>
          <Text style={styles.footerLabel}>Total a pagar</Text>
          <Text style={styles.footerTotal}>$ 141,84</Text>
        </View>
        <TouchableOpacity style={styles.buttonPes}>
          <Text style={styles.buttonTextPes}>Pagar agora →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Item = ({ title, total, items, image }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.itemImage} />
    <View style={{ flex: 1 }}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemSubtitle}>${total} • {items} itens</Text>
    </View>
    <Text style={styles.editText}>✏️ Editar</Text>
  </View>
);

function ListaCompraScreen() {
  
    return (
    <ScrollView style={styles.container}>
    
      <Text style={styles.locationList}>📍 Taboão da Serra, SP</Text>
      <Text style={styles.greeting}>Seja bem-vindo</Text>
      <Text style={styles.subtitle}>Vamos pedir itens fresquinhos para você?</Text>
      <Text style={styles.section}>Categorias</Text>
      <View style={styles.categories}>
        <Category title="Frutas" color="#CDE2B2" image={require('./assets/imagem-1.png')} />
        <Category title="Diversos" color="#A9C9FF" image={require('./assets/img-diversos.png')} />
        <Category title="Açougue" color="#ECC2BE" image={require('./assets/img-acougue.png')} />
      </View>

      <Text style={styles.section}>Minhas Compras</Text>
      <Purchase title="Frutas" date="27/05/2024" price="50,00" items="5" image={require('./assets/imagem-1.png')} />
      <Purchase title="Diversos" date="20/05/2024" price="35,40" items="6" image={require('./assets/img-diversos.png')} />
      <Purchase title="Açougue" date="20/05/2024" price="56,44" items="3" image={require('./assets/img-acougue.png')} />
    </ScrollView>
  );
}

const Category = ({ title, color, image }) => (
  <View style={[styles.categoryBox, { backgroundColor: color }]}>
    <Image source={image} style={styles.categoryImage} />
    <Text>{title}</Text>
  </View>
);

const Purchase = ({ title, date, price, items, image }) => (
  <View style={styles.purchaseItem}>
    <Image source={image} style={styles.purchaseImage} />
    <View style={{ flex: 1 }}>
      <Text style={styles.purchaseTitle}>{title}</Text>
      <Text style={styles.purchaseDate}>{date}</Text>
    </View>
    <View>
      <Text style={styles.purchasePrice}>${price}</Text>
      <Text>{items} itens</Text>
    </View>
  </View>
);






const Stack = createNativeStackNavigator();

export default function App() {

   let [fontsLoaded] = useFonts({
    'montserrat': require('/assets/fonts/Montserrat-Regular.ttf'), // Caminho para a fonte
  });
  return (
     
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Principal" component={TabsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function TabsScreen() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0, // Remove a borda superior
          elevation: 0, // Remove a sombra na aba
          shadowOpacity: 0, // Remove qualquer sombra
        },
        
      }}>
    <Tab.Screen name="Home" component={HomeScreen} options={{
    tabBarIcon: ({ color, size }) => (
      <Octicons name="home" size={24} color="black" />
    ),
    tabBarLabel: () => null, // remove o texto
  }} />
      <Tab.Screen name="Pesquisa" component={PesquisaScreen} options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="search" size={24} color="black" />
    ),
    tabBarLabel: () => null, // remove o texto
  }} />
  <Tab.Screen name="Lista de Produtos" component={ListaCompraScreen} options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="document-text-outline" size={24} color="black" />
    ),
    tabBarLabel: () => null, // remove o texto
  }} />
  <Tab.Screen name="Carrinho" component={CarrinhoScreen} options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="bag-handle-outline" size={24} color="black" />
    ),
    tabBarLabel: () => null, // remove o texto
  }} />
  
    </Tab.Navigator>
    
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
    marginTop: 20,
  },
  imagem: {
    width: 160,
    height: 240,
    
  },
   button: {
    backgroundColor: '#7785DB',
    paddingVertical: 20,
    paddingHorizontal: 42,
    borderRadius: 30,
    
    marginTop: 25,
    justifyContent: 'space-between', // borda arredondada
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#7785DB',
  },
  name: {
    color: '#black',
    fontSize: 20,
    marginBottom: 5,
  },
  email: {
    color: '#828B93',
    fontSize: 14,
    marginBottom: 10,
  },
  buttonUser: {
    backgroundColor: '#7785DB',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonTextUser: {
    color: '#fff',
    fontSize: 16,
  },
  location: { fontSize: 12, color: '#828B93' },
  locationList: { fontSize: 12, color: '#828B93', marginTop: 150 },
  greeting: { fontSize: 12, color: '#828B93',marginTop: 30 },
  subtitle: {fontSize: 18, fontWeight: 'bold', color: '#050609', marginTop: 4},
  section: { marginTop: 20, fontWeight: 'bold', fontSize: 16 },
  categories: { flexDirection: 'row', gap: 10, marginTop: 10 },
  categoryBox: { width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  categoryImage: { width: 40, height: 40, marginBottom: 5 },
  purchaseItem: { flexDirection: 'row', alignItems: 'center', marginTop: 15 },
  purchaseImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  purchaseTitle: { fontWeight: 'bold', color: '#050609' },
  purchaseDate: { color: '#828B93', fontSize: 12 },
  purchasePrice: { fontWeight: 'bold', color: '#050609' },
  image: { width: 50, height: 30, marginBottom: 5 },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    width: '47%',
    height: 80,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  item: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  itemImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  itemTitle: { fontWeight: 'bold', fontSize: 16 },
  itemSubtitle: { fontSize: 12, color: '#828B93' },
  editText: { color: '#7785DB', fontSize: 12 },
  footer: {
    marginTop: 'auto',
    backgroundColor: '#7785DB',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLabel: { color: '#fff', fontSize: 12 },
  footerTotal: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  buttonPes: {
    backgroundColor: '#7785DB',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonTextPes: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 70,
}});
