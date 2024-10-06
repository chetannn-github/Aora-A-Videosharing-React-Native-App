import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Post from '../../components/Post/Post'

const Bookmark = () => {
  return (
    <SafeAreaView className=" flex-1 bg-[#161622]  gap-5">
      <Text className="text-white">Search Results</Text>
      <ScrollView className="flex mb-5 max-h-fit">
        <Post/><Post/><Post/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Bookmark