import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = ({ navigation }) => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);

  const handleLogout = () => {
    AsyncStorage.removeItem("userInfo");
    console.log("Remove", AsyncStorage.userInfo)
    navigation.navigate("Login")
  }

  // const auth = AsyncStorage.getItem("userInfo")
  // userInfo = JSON.parse(userInfo);
  // console.log("user logger", userInfo)

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Text style={styles.welcome}>Welcome {userInfo.accountUsername}</Text>
      <Link to={{ screen: "ListAccount" }}>
        List Account
      </Link>
      <Button title="Logout" color="red" onPress={handleLogout} />
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
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default HomeScreen;
