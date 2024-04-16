import {View, TouchableOpacity, Text, Alert} from 'react-native';
import {useState} from 'react';
import React from 'react';

function UIButton(props) {
  const {title, isChecked} = props;
  const [isSelected, setIsSelected] = useState(isChecked);

  return (
    <TouchableOpacity
      onPress={() => setIsSelected(!isSelected)}
      style={{
        borderColor: isSelected == true ? 'red' : '#fff',
        backgroundColor: isSelected == true ? '#fff' : 'transparent',
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 5,
      }}>
      {isSelected == true ? (
        <Text style={{color: 'red', fontWeight: 'bold'}}>{title}</Text>
      ) : (
        <Text style={{color: 'white'}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

export default UIButton;
