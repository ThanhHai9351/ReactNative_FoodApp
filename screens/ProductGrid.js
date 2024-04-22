import React, {useState} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Image,
  Text,
  SafeAreaView,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {FoodItem} from '../components';
import {icons} from '../constants';
import ProductItemGrid from '../components/ProductItemGrid';

function ProductGrid() {
  const [products, setProducts] = useState([
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.y2Tl5GjB-Gwzcsj3r0dpogHaHa&pid=Api&P=0&h=220',
      name: 'máy hút bụi',
      price: 75,
      decription: ['Dry clean', 'cyclone filter', 'convinient cord storage'],
      reviews: 10,
      stars: 5,
      isSave: true,
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.y2Tl5GjB-Gwzcsj3r0dpogHaHa&pid=Api&P=0&h=220',
      name: 'máy hút bụi',
      price: 75,
      decription: ['Dry clean', 'cyclone filter', 'convinient cord storage'],
      reviews: 10,
      stars: 5,
      isSave: true,
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.y2Tl5GjB-Gwzcsj3r0dpogHaHa&pid=Api&P=0&h=220',
      name: 'máy hút bụi',
      price: 75,
      decription: ['Dry clean', 'cyclone filter', 'convinient cord storage'],
      reviews: 10,
      stars: 5,
      isSave: false,
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.y2Tl5GjB-Gwzcsj3r0dpogHaHa&pid=Api&P=0&h=220',
      name: 'máy hút bụi',
      price: 75,
      decription: ['Dry clean', 'cyclone filter', 'convinient cord storage'],
      reviews: 10,
      stars: 5,
      isSave: true,
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.y2Tl5GjB-Gwzcsj3r0dpogHaHa&pid=Api&P=0&h=220',
      name: 'máy hút bụi',
      price: 75,
      decription: ['Dry clean', 'cyclone filter', 'convinient cord storage'],
      reviews: 10,
      stars: 5,
      isSave: true,
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.y2Tl5GjB-Gwzcsj3r0dpogHaHa&pid=Api&P=0&h=220',
      name: 'máy hút bụi',
      price: 75,
      decription: [
        'Dry clean',
        'cyclone filter',
        'convinient cord storage',
        'al el ele',
      ],
      reviews: 10,
      stars: 5,
      isSave: true,
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.y2Tl5GjB-Gwzcsj3r0dpogHaHa&pid=Api&P=0&h=220',
      name: 'máy hút bụi',
      price: 75,
      decription: ['Dry clean', 'cyclone filter', 'convinient cord storage'],
      reviews: 10,
      stars: 4,
      isSave: true,
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({item, index}) => (
          <ProductItemGrid
            key={index}
            item={item}
            onPress={() => {
              products[index].isSave = !products[index].isSave;
              setProducts([...products]);
            }}
          />
        )}
      />
    </View>
  );
}

export default ProductGrid;
