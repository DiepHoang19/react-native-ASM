import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = ({ navigation }) => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);

  const handleLogout = () => {
    AsyncStorage.removeItem("userInfo");
    console.log("Remove", AsyncStorage.userInfo)
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Image
        style={styles.logo}
        source={require('../image/logoHome.jpg')}
      />
      <Text style={styles.welcome}>Welcome{userInfo.accountUsername}</Text>
      <Link to={{ screen: "ListAccount" }} style={{}}>
        List Account
      </Link>
      <Link to={{ screen: "Create" }}>
        CreateAccount
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
