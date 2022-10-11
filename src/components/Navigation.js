import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ListAccount from '../ListAccount/ListAccount';
import CreateAccount from '../CreateAccount/CreateAccount';
import CreatePost from '../post/CreatePost/CreatePost';
import ListPost from '../post/ListPost/ListPost';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="List-Customer"
          component={ListAccount}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Create-Customer"
          component={CreateAccount}
          options={{ headerShown: true }}
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
