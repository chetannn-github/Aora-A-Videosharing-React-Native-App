import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { logoutUser } from '../../lib/appwrite'
import { useDispatch, useSelector } from 'react-redux'
import { removeLoggedInUser } from '../../redux/userSlice'

const Profile = () => {
  let dispatch = useDispatch();
  let loggedInUser = useSelector((store) =>(store.user.loggedInUser));
   console.log("profile page -------------------------"+loggedInUser);
  let handleLogout = ()=>{
     console.log(loggedInUser);
     
    if(loggedInUser) logoutUser();
   
    dispatch(removeLoggedInUser());
    router.navigate("/")
    
  }
  return (
    <SafeAreaView className=" flex-1 bg-[#161622]  gap-5">
      
      <Pressable onPress={handleLogout}><Text className="text-white">Logout</Text></Pressable>
    
    
  </SafeAreaView>
  )
}

export default Profile