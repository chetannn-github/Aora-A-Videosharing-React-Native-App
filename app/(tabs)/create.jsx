import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import uploadImage from "../../assets/icons/upload.png"


const Create = () => {
  return (
    <SafeAreaView className=" flex-1 bg-[#161622] items-center">
    <View className="w-[90%] h-full  ">

      <Text className="font-psemibold text-2xl text-white">Upload Video</Text>

      <View className="mt-10 ">
        <Text className="font-pregular text-sm text-white mb-2">Video Title</Text>
        <TextInput placeholder='Give your video a catchy title'  placeholderTextColor={"#7B7B8B"} className="h-[50px]  text-white bg-[#1E1E2D] px-2"/>
      </View>
     
        
      <View className="mt-4">
          <Text className="font-pregular text-sm text-white mb-2">Select Video</Text>
          <View className="items-center h-[100px] justify-center bg-[#1e1e2d] "><Image resizeMode='contain' className="h-[50%]" source={uploadImage} ></Image></View>
        
      </View>
      <View className="mt-4">
        <Text className="font-pregular text-sm text-white mb-2">Thumbnail Image</Text>
        <View className="items-center  h-[59px] bg-[#1e1e2d]  flex-row  justify-center gap-x-2">
          <Image resizeMode='cover' className="h-[30px] w-[20px]" source={uploadImage} ></Image>
          <Text className="font-pmedium text-white">Select an image.</Text>
        </View>
      </View>

      <View className="mt-4">
          <Text className="font-pregular text-sm text-white mb-2">AI prompt</Text>
          <TextInput placeholder='The AI prompt of your video..'  placeholderTextColor={"#7B7B8B"} className="h-[50px]  text-white bg-[#1E1E2D] px-2"/>
      </View>

      <TouchableOpacity className="mt-4 py-3 px-2  rounded-lg  flex justify-center items-center font-bold  text-[#161622] bg-[#ff8c00]">
              <Text className="text-lg font-semibold">Submit & Publish</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default Create