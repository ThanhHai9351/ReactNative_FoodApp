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

function FoodList() {
  const [textSearch, setTextSearch] = useState('');

  const foods = [
    {
      name: 'Highland coffee',
      status: 'OPEN SOON',
      price: 100,
      foodtype: 'food and drink',
      image:
        'https://ghien.cafe/uploads/coffeeshop/highlands-coffee-phan-xich-long-6.jpg',
      website: 'https://www.highlandscoffee.com.vn/en/product.html',
      socialmedia: {
        facebook: 'ssada',
      },
    },
    {
      name: 'KFC Chicken',
      status: 'OPEN NOW',
      price: 100,
      foodtype: 'food',
      image:
        'https://tse3.mm.bing.net/th?id=OIP.7Vf_oqnD97QCv5PiA1Fr9QAAAA&pid=Api&P=0&h=220',
      website: 'dfsfsfsd',
      socialmedia: {
        facebook: 'ssada',
        gmail: 'sadasd',
      },
    },
    {
      name: 'Haidilao bitextco',
      status: 'OPEN SOON',
      price: 100,
      foodtype: 'food',
      image:
        'https://tse3.mm.bing.net/th?id=OIP.xevcOCQ-hGPXN-Se5DZf7QHaFj&pid=Api&P=0&h=220',
      website: 'dfsfsfsd',
      socialmedia: {
        facebook: 'ssada',
        github: 'sadas',
        gmail: 'sadasd',
      },
    },
    {
      name: 'Jollibee',
      status: 'CLOSE',
      price: 100,
      foodtype: 'food',
      image:
        'https://tse4.mm.bing.net/th?id=OIP.YU4Z3ulRyVosYcqgJBh4OgAAAA&pid=Api&P=0&h=220',
      website: 'dfsfsfsd',
      socialmedia: {
        facebook: 'ssada',
        github: 'sadas',
      },
    },
    {
      name: 'Hủ tiếu mực',
      status: 'OPEN NOW',
      price: 100,
      foodtype: 'food',
      image:
        'https://toplist.vn/images/800px/hu-tieu-muc-ong-gia-cali-330549.jpg',
      website: 'dfsfsfsd',
      socialmedia: {
        facebook: 'ssada',
        gmail: 'sadasd',
      },
    },
    {
      name: 'Bánh Mì Hà Nội',
      status: 'OPEN NOW',
      price: 100,
      foodtype: 'food',
      image:
        'https://ghien.cafe/uploads/coffeeshop/highlands-coffee-phan-xich-long-6.jpg',
      website: 'dfsfsfsd',
      socialmedia: {
        facebook: 'ssada',
        gmail: 'sadasd',
      },
    },
  ];

  const categories = [
    {
      name: 'highland',
      uri: 'https://tse4.mm.bing.net/th?id=OIP.t8BmaT5XOAdNFH8QCxRwpQHaHa&pid=Api&P=0&h=220',
    },
    {
      name: 'jolibee',
      uri: 'https://tse3.mm.bing.net/th?id=OIP.Z_HbgtuvjYfr692YoTDrXAHaHa&pid=Api&P=0&h=220',
    },
    {
      name: 'hadilao',
      uri: 'https://www.202foodpg.com/image/202foodpg/image/data/haidilao%20logo.jpg',
    },
    {
      name: 'manwah',
      uri: 'https://tse4.mm.bing.net/th?id=OIP.RQTjmycW-3l1K41urJs3qAHaHa&pid=Api&P=0&h=220',
    },
    {
      name: 'KFC',
      uri: 'https://tse3.mm.bing.net/th?id=OIP.qgIP4Cig1wZUqrWqGnj_bAHaFj&pid=Api&P=0&h=220',
    },
  ];

  return (
    <View>
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          marginHorizontal: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#cdcdcd',
            flexDirection: 'row',
            height: 40,
            marginHorizontal: 10,
            flex: 1,
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Image
            source={icons.searchIcon}
            style={{
              width: 20,
              height: 20,
              marginHorizontal: 10,
            }}
          />
          <TextInput
            onChangeText={text => setTextSearch(text)}
            style={{
              borderRadius: 15,
              height: 50,
              width: 250,
            }}
          />
        </View>
        <Image style={{marginEnd: 15}} source={icons.menuIcon} />
      </View>
      <View style={{height: 1, backgroundColor: '#cdcdcd'}} />
      <ScrollView
        horizontal={true}
        style={{height: 90, flexDirection: 'row', marginTop: 5}}>
        {categories.map((category, index) => (
          <View key={index} style={{margin: 5}}>
            <Image
              source={{uri: category.uri}}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
            <Text>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={{height: 1, backgroundColor: '#cdcdcd'}} />
      <ScrollView>
        {/* {foods.map((food, index) => (
          <FoodItem key={index} fooditem={food} />
        ))} */}
        {foods
          .filter(food =>
            food.name.toLowerCase().includes(textSearch.toLowerCase()),
          )
          .map((food, index) => (
            <FoodItem key={index} fooditem={food} />
          ))}
      </ScrollView>
    </View>
  );
}

export default FoodList;
