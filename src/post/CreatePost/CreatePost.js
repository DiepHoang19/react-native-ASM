import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import axios from "axios";
import { BASE_URL } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreatePost = () => {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = async () => {
        axios.post(`${BASE_URL}/api/v1/posts`, {
            title,
            content,
            image
        })
            .then((res) => {
                console.log("create success", res.data)
                // AsyncStorage.setItem("post", JSON.stringify(post))
            })
            .catch((err) => {
                console.log("create error", err)
            })
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                value={title}
                placeholder="title"
                onChangeText={text => setTitle(text)}
            />
            <TextInput
                style={styles.input}
                value={content}
                placeholder="content"
                onChangeText={text => setContent(text)}
            />
            <TextInput
                style={styles.input}
                value={image}
                placeholder="image"
                onChangeText={text => setImage(text)}
            />
            <Button
                title="submit"
                onPress={handleSubmit}
            />
        </View>
    )
}

export default CreatePost

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})