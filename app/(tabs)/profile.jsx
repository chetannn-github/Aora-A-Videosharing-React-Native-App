import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Link href={"/account"}><Text>Go to account Info</Text></Link>
      
    </View>
  )
}

export default Profile