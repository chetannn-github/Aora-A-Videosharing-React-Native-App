import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Signup = () => {
  return (
    <View>
      <Text>Signup Page</Text>
     <Link href={"/login"}> <Text>Go to login</Text></Link>
    </View>
  )
}

export default Signup