import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import PostThumbnail from "../../assets/preview/homepage.jpeg"
import PostImage from "../../assets/images/thumbnail.png"
import Profile from "../../assets/images/profile.png"
let Post = ()=> {
   
    return (
      <View className="w-[100%] items-center gap-y-3 mt-2 ">

        
        <View className="flex flex-row   w-[90%] items-start justify-between">
          <View className="w-[48px] h-[40px] border-[1.5px] border-secondary rounded-md overflow-hidden ">
            <Image resizeMode='cover' source={Profile}  className="h-full w-full " ></Image>
          </View>
            <View className="w-[80%]   flex ">
              <Text className="text-white text-[14px] ">this is post title </Text> 
              <Text className="text-[#CDCDE0] text-xs">chetan</Text>
            </View>
            <FontAwesome size={22} name="ellipsis-v" color={"#CDCDE0"} className="" />
        </View>
        
        <Image resizeMode='cover' className="w-[90%] h-[300px] rounded-lg" source={PostImage}  ></Image>
      </View>
    )
  }


export default Post