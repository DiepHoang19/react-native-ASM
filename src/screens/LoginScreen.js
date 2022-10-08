import React, { useContext, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';
import { Link } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { isLoading, login } = useContext(AuthContext);


  const handleSubmit = async () => {
    axios.post(`${BASE_URL}/api/v1/accounts/login`, {
      username,
      password
    })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigation.navigate("Home")
      })
      .catch((err) => {
        console.log(err)
      })
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
          value={username}
          placeholder="username"
          onChangeText={text => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        {/* <Button
          title="Login"
          onPress={() => {
            login(username, password);
          }}
        /> */}
        <Button title='Submit' onPress={handleSubmit} />

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
