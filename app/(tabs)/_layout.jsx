import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Slot, Stack } from 'expo-router'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'

const _layout = () => {
  return (
    <SafeAreaView className="h-full bg-blue-900">
      <ExpoStatusBar backgroundColor="yellow" style="dark" translucent={false} />
      <Link href={"/"}>
      <Text className="text-red-300">this is tab layout</Text>
      <Slot/>
      </Link>
    </SafeAreaView>
  )
}

export default _layout