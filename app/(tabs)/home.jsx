import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView className=" flex-1 bg-[#161622]  gap-5">
      <Text className="text-white">Search Results</Text>
      <Text className="text-white text-xl">VR Glasses</Text>
      <View className="flex flex-row justify-between">
        <TextInput placeholder='Search for video topic' placeholderTextColor={"#7B7B8B"} className="h-[50px] w-full bg-[#1E1E2D] px-2"/>
        
      </View>
      
    </SafeAreaView>
  )
}

export default Home