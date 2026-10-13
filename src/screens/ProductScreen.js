import { FlatList, Image, StyleSheet, View } from 'react-native';
import products from '../data/products';

const ProductScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
      numColumns={2} // définit 2 colonnes pour l'affichage des images
      keyExtractor={(item) => item.id} // clé unique pour chaque élément
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default ProductScreen;