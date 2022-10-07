import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';



const CreateAccount = ({ navigation }) => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const { isLoading, createAccount } = useContext(AuthContext);

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
                    onPress={() => {
                        createAccount(username, email, password);
                    }}
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