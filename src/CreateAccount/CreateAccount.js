import { Button, StyleSheet, TextInput, View, Text } from 'react-native'
import React, { useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import { BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RadioButton } from 'react-native-paper';
import { Link } from '@react-navigation/native';


const CreateAccount = ({ navigation }) => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [checked, setChecked] = useState('first');



    const handleCreate = () => {
        setIsLoading(true)
        axios
            .post(`${BASE_URL}/api/v1/accounts/register`, {
                username,
                email,
                password,
            })
            .then(res => {
                navigation.navigate("List-Customer")
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
    return (
        <View style={styles.container}>
            <Spinner visible={isLoading} />
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    value={username}
                    placeholder="customer name"
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
                    placeholder="Phone Number"

                />
                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                <Text>
                    Gender
                </Text>
                <Text >
                    Male
                </Text>
                <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                />
                <Text>
                    Female
                </Text>
                <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                />
                <Button
                    title="Add"
                    onPress={handleCreate}
                />
                <Link to={{ screen: "List-Customer" }} style={{ marginTop: 40, backgroundColor: "blue", color: "white", height: 50, padding: 15 }}>
                    Search Customer
                </Link>
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
        marginTop: 200
    },
    input: {
        marginBottom: 5,
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