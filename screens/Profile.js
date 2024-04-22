import {Alert, Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import axios from 'axios';
import {useEffect, useState} from 'react';

function Profile() {
  const [account, setAccount] = useState({});

  useEffect(() => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/users?id=1').then(res => {
        setAccount(res.data[0]);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{width: 150, height: 150, marginTop: 15, borderRadius: 100}}
          source={{
            uri: 'https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-1/434738801_1500067447523685_678754404103416484_n.jpg?stp=dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHLbB47XlQbeNABJZv1017SJET7CFvfG-kkRPsIW98b6Q1-lnurTYVS8g6popQhQ2WHw8HaXrI9HkYNX43sm5Ln&_nc_ohc=VXPc9SxnFLwAb64Y06H&_nc_ht=scontent-hkg1-2.xx&oh=00_AfDe5RtMMXjmTjHyfBrMP4_FRsuqzFDInWfDjZZT6lKmcg&oe=662A26A8',
          }}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{color: '#000', fontSize: 15}}>
          Name: <Text style={{fontWeight: '600'}}>{account.name}</Text>
        </Text>
        <Text style={{color: '#000', fontSize: 15}}>
          Email: <Text style={{fontWeight: '600'}}>{account.email}</Text>
        </Text>
        <Text style={{color: '#000', fontSize: 15}}>
          Address:
          <Text
            style={{
              fontWeight: '600',
            }}>{`${account.address.street} - ${account.address.suite} `}</Text>
        </Text>
        <Text style={{color: '#000', fontSize: 15}}>
          Phone: <Text style={{fontWeight: '600'}}>{account.phone}</Text>
        </Text>
        <Text style={{color: '#000', fontSize: 15}}>
          Website: <Text style={{fontWeight: '600'}}>{account.website}</Text>
        </Text>
        <Text style={{color: '#000', fontSize: 15}}>
          Company:{' '}
          <Text
            style={{
              fontWeight: '600',
            }}>{`${account.company.name} - ${account.company.catchPhrase} `}</Text>
        </Text>
      </View>
    </View>
  );
}

export default Profile;
