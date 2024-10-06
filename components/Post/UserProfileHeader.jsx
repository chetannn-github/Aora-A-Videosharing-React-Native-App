import { View, Text ,Image, Pressable} from 'react-native'
import React from 'react'
import PostImage from "../../assets/images/thumbnail.png"
import Profile from "../../assets/images/profile.png"
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../lib/appwrite'
import { removeLoggedInUser } from '../../redux/userSlice'
import { router } from 'expo-router'
import logoutImage from "../../assets/icons/logout.png"


const UserProfileHeader = () => {
    let loggedInUser = useSelector((store) =>(store.user.loggedInUser));
    let dispatch = useDispatch();
    let handleLogout = ()=>{
        console.log(loggedInUser);
        
       if(loggedInUser) logoutUser();
      
       dispatch(removeLoggedInUser());
       router.navigate("/")
       
     }







  return (
    <View className="flex items-center h-[fit] py-2 px-5 ">
        <Pressable onPress={handleLogout} className="self-end"><Image className="h-[20px] w-[20px] " source={logoutImage}></Image></Pressable>

        <View className="w-[106px] h-[106px] border-[1.5px] border-secondary rounded-md overflow-hidden ">
            <Image resizeMode='cover' source={Profile}  className="h-full w-full " ></Image>
            
        </View>
        <Text className="text-white text-[18px]">{loggedInUser?.username} </Text>
        <View className="w-[106px]  flex flex-col items-center  mt-3 ">
            <Text className="text-2xl text-white">10</Text>
            <Text className="text-[#cdcde0]">Posts</Text>
        </View>
    </View>
  )
}

export default UserProfileHeader