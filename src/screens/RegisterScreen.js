import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from '@react-navigation/native';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { BASE_URL } from '../config';


const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);



  const handleRegister = () => {
    setIsLoading(true)
    axios
      .post(`${BASE_URL}/api/v1/accounts/register`, {
        username,
        email,
        password,
      })
      .then(res => {
        console.log(res.data);
        setIsLoading(false);
        alert("create success!")
        navigation.navigate("Login")
      })
      .catch(err => {
        console.log(`register error ${err}`);
        setIsLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <Image
          style={styles.tinyLogo}
          source={require('../image/register.png')}
        />
        <TextInput
          style={styles.input}
          value={username}
          placeholder="user name"
          onChangeText={text => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email "
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <Button title='Register' onPress={handleRegister} />
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text>Already have an account? </Text>
          <Link style={styles.link} to={{ screen: "Login" }} >
            Login
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
    marginTop: 250
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
  tinyLogo: {
    position: 'relative',
    width: 168,
    height: 142,
    left: 60,
    top: -100,
  }
});

export default RegisterScreen;
