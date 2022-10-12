import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../config'

const ListPost = () => {
  const [listPost, setListPost] = useState([])

  useEffect(() => {
    getListPost();
  }, [])

  const getListPost = (id, title, content, username, image) => {
    axios.get(`${BASE_URL}/api/v1/posts`, {
      id,
      title,
      content,
      username,
      image
    })
      .then((res) => {
        console.log(res.data)
        setListPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }
  return (
    <View>

      {
        listPost.map((item, index) => {
          return (
            <>
              <View key={index}>
                <Text>
                  {item.id}
                </Text>
                <Text>
                  {item.username}
                </Text>
                <Text>
                  {item.title}
                </Text>
                <Text>
                  {item.content}
                </Text>
                <Text>
                  {item.image}
                </Text>
              </View>
            </>
          )
        })
      }
    </View>
  )
}

export default ListPost

const styles = StyleSheet.create({})