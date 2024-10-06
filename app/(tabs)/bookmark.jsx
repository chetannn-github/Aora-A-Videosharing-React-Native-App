import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Post from '../../components/Post/Post'

const Bookmark = () => {
  return (
    <SafeAreaView className=" flex-1 bg-[#161622] items-center  gap-5">
      <Text  className="text-white text-2xl w-[90%] font-pmedium">Saved Posts</Text>
      <ScrollView className="flex mb-5 max-h-fit  w-full">
        <Post/><Post/><Post/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Bookmark