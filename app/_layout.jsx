import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Provider, useSelector } from 'react-redux'
import { appStore } from '../redux/appstore'

const RootLayout = () => {
 
 

  
  return (
    <Provider store={appStore}>

   
     <SafeAreaView className= "h-full bg-secondary ">
     
    {/* stack navigation setup */}
    <Stack > 
      
      <Stack.Screen 
      name='index' 
      options={{headerStyle:{backgroundColor:"red" } , headerShown:false,headerBackButtonMenuEnabled:true,animation:'slide_from_right'}}>

      </Stack.Screen>
      <Stack.Screen
      name='(tabs)'
      options={{headerStyle:{backgroundColor:"red" } , headerShown:false,headerBackButtonMenuEnabled:true,animation:'slide_from_bottom'}}>

      </Stack.Screen>
      <Stack.Screen
      name='(auth)'
      options={{headerStyle:{backgroundColor:"red" } , headerShown:false,headerBackButtonMenuEnabled:true,animation:'slide_from_right'}}>
        
      </Stack.Screen> 
      
    </Stack>
    </SafeAreaView>
    </Provider>
  
  )
}

export default RootLayout