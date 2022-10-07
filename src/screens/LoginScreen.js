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



const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { isLoading, login } = useContext(AuthContext);

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

        <Button
          title="Login"
          onPress={() => {
            login(username, password);
          }}
        />

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
