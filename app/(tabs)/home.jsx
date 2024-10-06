import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'
import Post from '../../components/Post/Post'
import { useSelector } from 'react-redux'
const Home = () => {
  let loggedInUser = useSelector((store)=>(store.user.loggedInUser));
  return (
    <SafeAreaView className="  bg-[#161622] w-full mb-[100px] items-center">
      <View className="w-[90%]  h-fit ">
        <Text className="text-[#CDCDE0] text-[14px]  font-pregular">Welcome Back</Text>
              <Text className="text-white text-2xl font-pregular mb-2">{loggedInUser?.username} </Text>

              <View className="flex flex-row w-full rounded-md overflow-hidden items-center">
                <TextInput placeholder='Search for video topic'  placeholderTextColor={"#7B7B8B"} className="h-[50px] w-[90%] text-white bg-[#1E1E2D] px-2"/>
                <View className="absolute right-0 bottom-0 bg-[#1E1E2D] justify-center w-[10%] h-full ">
                <FontAwesome size={28} name="search" color={"white"}  /></View>
              </View>
      </View>
      

      <ScrollView className="flex mb-5 max-h-fit w-full">
        <Post/><Post/><Post/>
      </ScrollView>

      
    </SafeAreaView>
  )
}

export default Home