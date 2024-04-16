import React, {useState} from 'react';
import {images, icons} from '../constants';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import UIButton from '../components/UIButton';

function Dashboard() {
  const [listButton, setListButton] = useState([
    {
      name: 'toast',
      isChecked: true,
    },
    {
      name: 'toast 2',
      isChecked: true,
    },
    {
      name: 'toast 3',
      isChecked: false,
    },
  ]);

  const toggleButton = index => {
    const newListButton = [...listButton];
    newListButton[index].isChecked = !newListButton[index].isChecked;
    setListButton(newListButton);
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{flex: 100}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            flex: 20,
          }}>
          <Image
            source={icons.fireIcon}
            style={{
              width: 30,
              height: 30,
              marginStart: 10,
            }}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#fff',
              marginEnd: 90,
            }}>
            ThanhHaiCompany.Com
          </Text>
          <Image
            source={icons.questionIcon}
            style={{
              width: 30,
              height: 30,
              marginEnd: 15,
            }}
          />
        </View>
        <View style={{flex: 20, alignItems: 'center'}}>
          <Text style={{color: '#fff'}}>Introduce to action</Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              marginTop: 10,
              marginBottom: 10,
              fontWeight: 'bold',
            }}>
            Welcome to ThanhHaiCompany
          </Text>
          <Text style={{color: '#fff'}}>Trade coin to win</Text>
        </View>
        <View style={{flex: 40}}>
          {listButton.map((btn, index) => (
            <UIButton key={index} title={btn.name} isChecked={btn.isChecked} />
          ))}
        </View>
        <View style={{flex: 20, backgroundColor: 'blue'}} />
      </ImageBackground>
    </View>
  );
}

export default Dashboard;
