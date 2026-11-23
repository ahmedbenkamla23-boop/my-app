import { StatusBar } from 'expo-status-bar';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ShoppingCart from './src/screens/ShoppingCart';


export default function App() {
  return (
    <>
      <ProductDetailsScreen />
      <StatusBar style="auto" />

      <ShoppingCart />
      <StatusBar style="auto" />
    </>
  );
}