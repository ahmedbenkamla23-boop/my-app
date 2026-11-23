import { NavigationContainer } from '@react-navigation/native';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProductScreen from './screens/ProductScreen';
import ShoppingCart from './screens/ShoppingCart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductScreen} />
        <Stack.Screen name="Product Detail" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;