import { Link } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { AuthContext } from '../context/AuthContext';

const HomeScreen = ({ navigation }) => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);
  const [username, setUsername] = useState(null);



  const handleLogout = () => {
    AsyncStorage.removeItem("accessToken");
    navigation.navigate("Login");
  }

  useEffect(async () => {
    setUsername(await AsyncStorage.getItem("accountUsername"))
  }, [])



  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Image
        style={styles.logo}
        source={require('../image/logoHome.jpg')}
      />
      <Text style={styles.welcome}>username: {username} </Text>
      <Link to={{ screen: "List-Customer" }} >
        List Customers
      </Link>
      <Link to={{ screen: "Create-Customer" }}>
        Create Customers
      </Link>
      <Link to={{ screen: "Post-List" }}>
        List Post
      </Link>

      <Text style={{
        color: "#50C2C9",
        position: "absolute",
        width: 74,
        height: 27,
        left: 150,
        top: 610,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: 18,
        lineHeight: 27,
        fontWeight: "700",
        fontStyle: 'normal',
      }} onPress={handleLogout}> Logout</Text>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#E5E5E5",
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
  logo: {
    borderRadius: 100,
    position: "absolute",
    width: 150,
    height: 150,
    left: 114,
    top: 132,
  }
});

export default HomeScreen;
