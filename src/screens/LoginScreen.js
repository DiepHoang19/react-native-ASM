import React, { useContext, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  AsyncStorage,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';
import { Link } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../config';



const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/accounts/login`, {
        email,
        password
      })
      AsyncStorage.setItem('accessToken', res.data.accessToken);
      AsyncStorage.setItem('accountUsername', res.data.accountUsername);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("Home");
  }


  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Image
        style={styles.tinyLogo}
        source={require('../image/login.png')}
      />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <Button title='Submit' onPress={handleLogin} />

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text>Don't have an account? </Text>
          <Link style={styles.link} to={{ screen: 'Register', }}>
            Register
          </Link>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#E5E5E5",
  },
  wrapper: {
    width: '80%',
    marginTop: 350

  },
  tinyLogo: {
    position: 'relative',
    left: 20,
    right: 32.54,
    top: 250,
    bottom: 1.92,

  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,

  },
  link: {
    color: 'blue',
  },
});

export default LoginScreen;
