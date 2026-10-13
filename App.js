import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import {products} from './src/data/products' ;
import { FlatList } from 'react-native';
import ProductScreen from './src/screens/ProductScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
          data={products}
          renderItem={({item}) => (
            <view style={styles.itemContainer}>
              <image source={{uri: item.image}} style={styles.Image} />
            </view>
          )}
         numColumns={2} // definit toujours 2 columnes pour l'affichage des images
         key={2} // Utilisé pour forcer le re-render de la FlatList lorsque le nombre de colonnes change
         keyExtractor={(item) => item.id} // Utilisé pour donner une clé unique à chaque élément de la liste
        />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
});
