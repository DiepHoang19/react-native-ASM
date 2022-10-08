import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';



const CreateAccount = ({ navigation }) => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    // const { isLoading, createAccount } = useContext(AuthContext);

    const handleCreate = () => {
        setIsLoading(true)
        axios
            .post(`${BASE_URL}/api/v1/accounts/register`, {
                username,
                email,
                password,
            })
            .then(res => {
                navigation.navigate("ListAccount")
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
                console.log(userInfo);
            })
            .catch(err => {
                console.log(`register error ${err}`);
                setIsLoading(false);
            });


    }



    // const register = (username, email, password) => {
    //     setIsLoading(true);
    //     axios
    //         .post(`${BASE_URL}/api/v1/accounts/register`, {
    //             username,
    //             email,
    //             password,
    //         })
    //         .then(res => {
    //             let userInfo = res.data;
    //             setUserInfo(userInfo);
    //             AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    //             setIsLoading(false);
    //             console.log(userInfo);
    //         })
    //         .catch(e => {
    //             console.log(`register error ${e}`);
    //             setIsLoading(false);
    //         });
    // };

    return (
        <View style={styles.container}>
            <Spinner visible={isLoading} />
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    value={username}
                    placeholder="user name"
                    onChangeText={text => setUsername(text)}
                />
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
                <Button
                    title="Add"
                    onPress={handleCreate}
                />
            </View>
        </View>
    )
}

export default CreateAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '80%',
        marginTop: 300
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
        position: "absolute",
        width: 168,
        height: 142,
        left: 60,
        top: -200,
    }
})