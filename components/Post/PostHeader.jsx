import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import PostThumbnail from "../../assets/preview/homepage.jpeg"

export class PostHeader extends Component {
  render() {
    return (
      <View>
        <Image source={PostThumbnail}  ></Image>
        <View className="">
            <Text>this is post title </Text> 
            <FontAwesome size={28} name="ellipsis-v" color={"white"} className="absolute right-0 z-10" />
            <Text>chetan</Text>
        </View>
        <FontAwesome size={28} name="ellipsis-v" color={"white"} className="absolute right-0 z-10" />
        <Image source={PostThumbnail}  ></Image>
      </View>
    )
  }
}

export default PostHeader