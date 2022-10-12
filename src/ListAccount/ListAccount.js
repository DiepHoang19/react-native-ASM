import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import { Link } from '@react-navigation/native';


const ListAccount = () => {
    const [listAccount, setListAccount] = useState([])

    const phoneNumber = [
        {
            phone: "033456789",
            gender: "Male",

        }
    ]

    useEffect(() => {
        getList();
    }, [])


    const getList = (id, username, email) => {
        axios.get(`${BASE_URL}/api/v1/accounts/list`, {
            id,
            username,
            email
        })
            .then((res) => {
                console.log(res.data)
                setListAccount(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <ScrollView>

            <View style={styles.container}>
                <Link style={{ backgroundColor: "red", width: "20%", padding: 10, borderRadius: 5, color: "white", marginTop: 20, marginLeft: 20 }} to={{ screen: "Home" }}>
                    Back
                </Link>
                {listAccount.map((item, index) => {
                    return (
                        <View key={index}>
                            {
                                phoneNumber.map((Items) => {
                                    return (
                                        <>
                                            <Text style={{ padding: 10 }}>
                                                id:  {item.id}
                                            </Text>
                                            <Text style={{ padding: 10 }}>
                                                Customer : {item.username}
                                            </Text>
                                            <Text style={{ padding: 10 }}>
                                                email : {item.email}
                                            </Text>
                                            <Text style={{ padding: 10 }}>
                                                Gender : {Items.gender}
                                            </Text>
                                            <Text style={{ padding: 10 }}>
                                                Phone Number : {Items.phone}
                                            </Text>
                                        </>
                                    )
                                })
                            }
                        </View>
                    );
                })}
            </View>
        </ScrollView>

    )
}

export default ListAccount;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     padding: 50,
    // },
    // item: {
    //     padding: 20,
    //     fontSize: 15,

    // }
})