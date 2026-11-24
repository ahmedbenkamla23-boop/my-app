import { StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const ProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // mettre à jour le produit sélectionné
            dispatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate('Product Detail');
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
      keyExtractor={(item) => item.id}
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