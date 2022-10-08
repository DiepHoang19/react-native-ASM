import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useLinkTo } from '@react-navigation/native';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL } from '../config';




export const AuthContext = createContext();



export const AuthProvider = ({ children, navigation }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [accountList, setAccountList] = useState([])



  const listAccount = (username, email, id) => {
    setIsLoading(true);
    axios.get(`${BASE_URL}/api/v1/accounts/list`, {
      username,
      email,
      id
    })
      .then((res) => {
        setIsLoading(false)
        console.log(res.data);
        setAccountList(res.data)
      })
      .catch((err) => {
        setIsLoading(true)
        console.log(err)
      })
  }


  const register = (username, email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/api/v1/accounts/register`, {
        username,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };


  const createAccount = (username, email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/api/v1/accounts/register`, {
        username,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (username, password) => {
    if (username == "" || password == "") {
      alert("Null")
    } else {
      setIsLoading(true);
      axios
        .post(`${BASE_URL}/api/v1/accounts/login`, {
          username,
          password,
        })
        .then(res => {
          let userInfo = res.data;
          console.log(userInfo);
          setUserInfo(userInfo);
          AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
          setIsLoading(false);
        })
        .catch(e => {
          console.log(e)
          setIsLoading(false);
        });
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userInfo').then(() => {
        console.log("data", AsyncStorage.userInfo)
      })
    }
    catch (exception) {
      return exception;
    }
  }

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
        createAccount,
        listAccount,
        accountList
      }}>
      {children}
    </AuthContext.Provider>
  );
};
