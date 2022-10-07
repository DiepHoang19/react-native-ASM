import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const ListAccount = () => {
    const { accountList, listAccount } = useContext(AuthContext);
    return (
        <View>
          
        </View>
    )
}

export default ListAccount

const styles = StyleSheet.create({})