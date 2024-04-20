import {Text, View, Image} from 'react-native';
import React from 'react';
import {icons} from '../constants/index';

function FoodItem(props) {
  const statusName = status => {
    if (status === 'OPEN NOW') {
      return <Text style={{color: 'green', fontWeight: 'bold'}}>{status}</Text>;
    } else if (status === 'CLOSE') {
      return <Text style={{color: 'red', fontWeight: 'bold'}}>{status}</Text>;
    } else {
      return (
        <Text style={{color: 'orange', fontWeight: 'bold'}}>{status}</Text>
      );
    }
  };

  const {fooditem} = props;
  return (
    <>
      <View style={{height: 150, flexDirection: 'row'}}>
        <Image
          style={{
            height: 100,
            width: 100,
            resizeMode: 'cover',
            margin: 10,
            borderRadius: 10,
          }}
          source={{
            uri: fooditem.image,
          }}
        />
        <View style={{marginTop: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, marginBottom: 5}}>
            {fooditem.name}
          </Text>
          <View style={{backgroundColor: '#000', height: 1, width: 300}} />
          <Text>Status: {statusName(fooditem.status)}</Text>
          <Text>
            Price: <Text>{`${fooditem.price}$`}</Text>
          </Text>
          <Text>
            FoodType: <Text>{fooditem.foodtype}</Text>
          </Text>
          <Text>
            Website: <Text>{fooditem.website}</Text>
          </Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            {fooditem.socialmedia.facebook ? (
              <Image style={{marginEnd: 10}} source={icons.facebookIcon} />
            ) : null}
            {fooditem.socialmedia.github ? (
              <Image style={{marginEnd: 10}} source={icons.githubIcon} />
            ) : null}
            {fooditem.socialmedia.gmail ? (
              <Image style={{marginEnd: 10}} source={icons.gmailIcon} />
            ) : null}
          </View>
        </View>
      </View>
    </>
  );
}

export default FoodItem;
