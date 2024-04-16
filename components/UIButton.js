import {View, TouchableOpacity, Text, Alert} from 'react-native';
import React from 'react';

function UIButton(props) {
  const {title, isChecked, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: isChecked == true ? 'red' : '#fff',
        backgroundColor: isChecked == true ? '#fff' : 'transparent',
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 5,
      }}>
      {isChecked == true ? (
        <Text style={{color: 'red', fontWeight: 'bold'}}>{title}</Text>
      ) : (
        <Text style={{color: 'white'}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

export default UIButton;
