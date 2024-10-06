import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'
import Post from '../../components/Post/Post'
import { useSelector } from 'react-redux'
const Home = () => {
  let loggedInUser = useSelector((store)=>(store.user.loggedInUser));
  return (
    <SafeAreaView className="  bg-[#161622] w-full mb-[100px]">
      <Text className="text-[#CDCDE0] text-[14px]">Welcome Back</Text>
      <Text className="text-white text-2xl">{loggedInUser?.username} </Text>
      <View className="flex flex-row justify-between">
        <TextInput placeholder='Search for video topic'  placeholderTextColor={"#7B7B8B"} className="h-[50px] w-full text-white bg-[#1E1E2D] px-2"/>
        
        <FontAwesome size={28} name="search" color={"white"} className="absolute right-0 z-10" />
      </View>

      <ScrollView className="flex mb-5 max-h-fit">
        <Post/><Post/><Post/>
      </ScrollView>

      
    </SafeAreaView>
  )
}

export default Home