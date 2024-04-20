import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {icons} from '../constants/index';

function ProductItemGrid(props) {
  const {item, onPress} = props;
  const fiveStars = star => {
    switch (star) {
      case 1:
        return (
          <Image style={{width: 15, height: 15}} source={icons.starIcon} />
        );
      case 2:
        return (
          <>
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
          </>
        );
      case 3:
        return (
          <>
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
          </>
        );
      case 4:
        return (
          <>
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
          </>
        );
      case 5:
        return (
          <>
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
            <Image style={{width: 15, height: 15}} source={icons.starIcon} />
          </>
        );
    }
  };
  return (
    <View
      style={{
        borderRadius: 15,
        flex: 0.5,
        borderWidth: 1,
        borderColor: '#cdcdcd',
        margin: 5,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image
          source={{uri: item.url}}
          style={{width: 100, height: 100, marginHorizontal: 10}}
        />
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            color: '#000',
            marginHorizontal: 10,
            marginTop: 10,
          }}>
          $ {item.price}
        </Text>
      </View>
      <Text
        style={{
          margin: 5,
          marginStart: 15,
          color: 'red',
          fontWeight: '600',
          fontSize: 20,
        }}>
        $ {item.name}
      </Text>
      <View style={{marginTop: 10, marginStart: 10}}>
        {item.decription.map(des => (
          <Text style={{color: '#000'}}>* {des}</Text>
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginTop: 10,
          marginBottom: 10,
        }}>
        <View>
          <TouchableOpacity onPress={onPress}>
            {item.isSave == true ? (
              <Image source={icons.heartIcon} style={{marginHorizontal: 5}} />
            ) : (
              <Image
                source={icons.heartNonIcon}
                style={{marginHorizontal: 5}}
              />
            )}
          </TouchableOpacity>
          <Text style={{color: 'red', fontWeight: '500'}}>
            Saved for {'\n'} later
          </Text>
        </View>
        <View style={{marginStart: 20}}>
          <View style={{flexDirection: 'row'}}>{fiveStars(item.stars)}</View>
          <Text style={{color: 'blue', marginTop: 5}}>
            {item.reviews} Viewers
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ProductItemGrid;
