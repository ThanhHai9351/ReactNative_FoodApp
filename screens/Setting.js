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
  Switch,
} from 'react-native';
import {FoodItem} from '../components';
import {icons} from '../constants';
import ProductItemGrid from '../components/ProductItemGrid';

function Setting() {
  const [background, setBackground] = useState(false);
  const [fingerprint, setFingerprint] = useState(false);
  const [password, setPassword] = useState(false);
  return (
    <View>
      <View
        style={{
          height: 80,
          backgroundColor: '#FF6633',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 25, color: '#fff', fontWeight: '500'}}>
          Settings
        </Text>
      </View>
      <View>
        <Text
          style={{
            backgroundColor: '#888888',
            color: 'red',
            fontSize: 16,
            padding: 10,
            fontWeight: '500',
          }}>
          Common
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              height: 40,
              paddingStart: 10,
              flex: 1,
              color: '#000',
            }}>
            <Image
              source={icons.languageIcon}
              style={{width: 25, height: 25}}
            />
            {'\t\t'}Languague
          </Text>
          <Text style={{marginEnd: 10, fontWeight: '500'}}>{`English >`}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              height: 40,
              paddingStart: 10,
              flex: 1,
              color: '#000',
            }}>
            <Image
              source={icons.environmentIcon}
              style={{width: 25, height: 25}}
            />
            {'\t\t'}Environment
          </Text>
          <Text
            style={{marginEnd: 10, fontWeight: '500'}}>{`Production >`}</Text>
        </View>
        <Text
          style={{
            backgroundColor: '#888888',
            color: 'red',
            fontSize: 16,
            padding: 10,
            fontWeight: '500',
          }}>
          Account
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              height: 40,
              paddingStart: 10,
              flex: 1,
              color: '#000',
            }}>
            <Image source={icons.phoneIcon} style={{width: 25, height: 25}} />
            {'\t\t'}Phone Number
          </Text>
          <Text style={{marginEnd: 10, fontWeight: '500'}}>{`>`}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              height: 40,
              paddingStart: 10,
              flex: 1,
              color: '#000',
            }}>
            <Image source={icons.emailIcon} style={{width: 25, height: 25}} />
            {'\t\t'}Email
          </Text>
          <Text style={{marginEnd: 10, fontWeight: '500'}}>{`>`}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              height: 40,
              paddingStart: 10,
              flex: 1,
              color: '#000',
            }}>
            <Image source={icons.logoutIcon} style={{width: 25, height: 25}} />
            {'\t\t'}Sign Out
          </Text>
          <Text style={{marginEnd: 10, fontWeight: '500'}}>{`>`}</Text>
        </View>
        <Text
          style={{
            backgroundColor: '#888888',
            color: 'red',
            fontSize: 16,
            padding: 10,
            fontWeight: '500',
          }}>
          Security
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              height: 40,
              paddingStart: 10,
              flex: 1,
              color: '#000',
            }}>
            <Image source={icons.doorIcon} style={{width: 25, height: 25}} />
            {'\t\t'}Log App In Background
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#FF6633'}}
            thumbColor={background ? '#FF6633' : '#767577'}
            onValueChange={() => setBackground(!background)}
            value={background}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              height: 40,
              paddingStart: 10,
              flex: 1,
              color: '#000',
            }}>
            <Image source={icons.fingerIcon} style={{width: 25, height: 25}} />
            {'\t\t'}Use fingerprint
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#FF6633'}}
            thumbColor={fingerprint ? '#FF6633' : '#767577'}
            onValueChange={() => setFingerprint(!fingerprint)}
            value={fingerprint}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              height: 40,
              paddingStart: 10,
              flex: 1,
              color: '#000',
            }}>
            <Image source={icons.logoutIcon} style={{width: 25, height: 25}} />
            {'\t\t'}Change Password
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#FF6633'}}
            thumbColor={password ? '#FF6633' : '#767577'}
            onValueChange={() => setPassword(!password)}
            value={password}
          />
        </View>
        <Text
          style={{
            backgroundColor: '#888888',
            color: 'red',
            fontSize: 16,
            padding: 10,
            fontWeight: '500',
          }}>
          Common
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              height: 40,
              paddingStart: 10,
              flex: 1,
              color: '#000',
            }}>
            <Image source={icons.paperIcon} style={{width: 25, height: 25}} />
            {'\t\t'}Term Of Service
          </Text>
          <Text style={{marginEnd: 10, fontWeight: '500'}}>{`>`}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              height: 40,
              paddingStart: 10,
              flex: 1,
              color: '#000',
            }}>
            <Image source={icons.paperIcon} style={{width: 25, height: 25}} />
            {'\t\t'}Open source licenses
          </Text>
          <Text style={{marginEnd: 10, fontWeight: '500'}}>{`>`}</Text>
        </View>
      </View>
    </View>
  );
}

export default Setting;
