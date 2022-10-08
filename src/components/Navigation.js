import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';
import ListAccount from '../ListAccount/ListAccount';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo, splashLoading } = useContext(AuthContext);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListAccount'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          // options={{ headerShown: false }}
        />
          <Stack.Screen
          name="ListAccount"
          component={ListAccount}
          // options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {splashLoading ? (
    //       <Stack.Screen
    //         name="Splash Screen"
    //         component={SplashScreen}
    //         options={{ headerShown: false }}
    //       />
    //     ) : userInfo.accessToken ? (
    //       <>
    //         <Stack.Screen name="Home" component={HomeScreen} />
    //       </>
    //     ) : (
    //       <>
    //         <Stack.Screen
    //           name="Login"
    //           component={LoginScreen}
    //           options={{ headerShown: false }}
    //         />
    //         <Stack.Screen
    //           name="Register"
    //           component={RegisterScreen}
    //           options={{ headerShown: false }}
    //         />
    //       </>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Navigation;
