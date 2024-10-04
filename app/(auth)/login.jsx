import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <View>
      <Text>Login Page</Text>

      <Link href={"/signup"}> <Text>Go to signup</Text></Link>
    </View>
  )
}

export default Login