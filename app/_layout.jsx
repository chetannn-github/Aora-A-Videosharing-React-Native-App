import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, Slot, SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Provider, useSelector } from 'react-redux'
import { appStore } from '../redux/appstore'
import { useFonts } from 'expo-font'


 //! prevent splash screen to auto hide before our components gets ready
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
 

  
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