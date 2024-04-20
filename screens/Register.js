import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {icons} from '../constants';
import {validateEmail, validatePassword} from '../utilies';

function Register(props) {
  const [keyboardIsShow, setKeyboardIsShow] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorRePassword, setErrorRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleLogin = () => {
    Alert.alert(
      'Thông báo thông tin đăng ký!',
      `email: ${email} - password: ${password}`,
    );
  };

  const validateRePassword = (password, rePassword) => {
    return password === rePassword ? true : false;
  };

  const isValid = () =>
    errorEmail == '' && errorPassword == '' && errorRePassword == '';

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  }, []);

  return (
    <KeyboardAvoidingView
      style={{flex: 100, backgroundColor: '#FF3300'}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View
        style={{
          flex: 30,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, color: '#fff', fontWeight: 'bold'}}>
          Here's {'\n'}your first step {'\n'}with us
        </Text>
        <Image style={{width: 100, height: 100}} source={icons.loginIcon} />
      </View>

      <View
        style={{
          flex: 50,
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 15,
          marginHorizontal: 10,
        }}>
        <View style={{marginStart: 25}}>
          <Text style={{color: 'red', fontSize: 15}}>Email</Text>
          <TextInput
            onChangeText={text => {
              setEmail(text);
              setErrorEmail(validateEmail(text) == true ? '' : 'Ivalid Email');
            }}
            style={{
              color: '#000',
              marginStart: 10,
              fontSize: 15,
            }}
            placeholder="email@gmail.com"
            placeholderTextColor="#cdcdcd"
          />
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: 'red',
            marginBottom: 10,
            marginHorizontal: 20,
          }}
        />
        {errorEmail == '' ? (
          ''
        ) : (
          <Text style={{color: 'red', marginStart: 20}}>{errorEmail}</Text>
        )}
        <View style={{marginStart: 25, marginTop: 10}}>
          <Text style={{color: 'red', fontSize: 15}}>Password</Text>
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                validatePassword(text) == true ? '' : 'Ivalid Password',
              );
              setPassword(text);
            }}
            secureTextEntry={true}
            style={{
              color: '#000',
              marginStart: 10,
              borderColor: '#000',
              borderEndWidth: 1,
              fontSize: 15,
            }}
            placeholder="enter password ..."
            placeholderTextColor="#cdcdcd"
          />
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: 'red',
            marginBottom: 10,
            marginHorizontal: 20,
          }}
        />
        {errorPassword == '' ? (
          ''
        ) : (
          <Text style={{color: 'red', marginStart: 20}}>{errorPassword}</Text>
        )}
        <View style={{marginStart: 25, marginTop: 10}}>
          <Text style={{color: 'red'}}>Re Password</Text>
          <TextInput
            onChangeText={text => {
              setRePassword(text);
              setErrorRePassword(
                validateRePassword(password, text) == true
                  ? ''
                  : 'Re Password not match password',
              );
            }}
            secureTextEntry={true}
            style={{
              color: '#000',
              marginStart: 10,
              borderColor: '#000',
              borderEndWidth: 1,
              fontSize: 15,
            }}
            placeholder="enter password ..."
            placeholderTextColor="#cdcdcd"
          />
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: 'red',
            marginBottom: 10,
            marginHorizontal: 20,
          }}
        />
        {errorRePassword == '' ? (
          ''
        ) : (
          <Text style={{color: 'red', marginStart: 20}}>{errorRePassword}</Text>
        )}
        <View style={{smarginTop: 30}}>
          <TouchableOpacity
            disabled={isValid() == false}
            onPress={handleLogin}
            style={{
              marginTop: 20,
              borderWidth: 1,
              borderColor: '#cdcdcd',
              marginHorizontal: 100,
              borderRadius: 20,
              backgroundColor: isValid() == true ? '#FF3300' : '#cdcdcd',
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: 5,
                color: '#fff',
                fontSize: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              Register
            </Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', color: 'red', marginTop: 10}}>
            Have a account! Login Now!
          </Text>
        </View>
      </View>
      {errorRePassword == '' ? (
        ''
      ) : (
        <Text style={{color: 'red', marginStart: 20}}>{errorRePassword}</Text>
      )}

      {keyboardIsShow == false ? (
        <>
          <View style={{flex: 20, marginTop: 20}}>
            <View style={{borderWidth: 1, borderColor: '#cdcdcd'}} />
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 15,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              Use Other Method
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                style={{width: 40, margin: 5, height: 40}}
                source={icons.githubIcon}
              />
              <Image
                style={{width: 40, margin: 5, height: 40}}
                source={icons.facebookIcon}
              />
            </View>
          </View>
        </>
      ) : (
        ''
      )}
    </KeyboardAvoidingView>
  );
}
export default Register;
