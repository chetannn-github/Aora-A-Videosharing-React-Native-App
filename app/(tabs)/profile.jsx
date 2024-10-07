import { View, Text, Pressable, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, router, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { appwriteConfig, databases, logoutUser } from '../../lib/appwrite'
import { useDispatch, useSelector } from 'react-redux'
import { removeLoggedInUser } from '../../redux/userSlice'
import Post from '../../components/Post/Post'
import UserProfileHeader from '../../components/Post/UserProfileHeader'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import noPostImage from "../../assets/images/empty.png"
import { Query } from 'react-native-appwrite'


const Profile = () => {
  let dispatch = useDispatch();
  let loggedInUser = useSelector((store) =>(store.user.loggedInUser));
  let [posts , setPosts] = useState([]);
  let getUserPosts = async () =>{
    try {
      let res= await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId,
       [ Query.equal('creator', loggedInUser.$id)]

      )
       setPosts(res?.documents)
       console.log(posts[0])


      

    } catch (error) {
      console.log(error)
    }
  }
  
   useEffect(()=>{getUserPosts()},[]) 

  
   console.log("profile page -------------------------"+loggedInUser);

   //find posts of loggedin user

  
  return (
    <SafeAreaView className=" flex-1 bg-[#161622]    ">
      
    
      <UserProfileHeader totalPosts={posts.length} />


      {/* no posts  */}
      {/* <View className= "flex items-center">
        <View className="w-[90%] px-2  h-[200px] overflow-hidden ">
          <Image resizeMode='cover' className="relative h-[200px] w-full " source={noPostImage}></Image>

          
        </View>
        <Text className="text-xl text-white mb-2">No Videos found for this profile.</Text>
        <TouchableOpacity onPress={()=>{router.navigate('/home')}} className=" py-3 px-2 w-[90%]  rounded-lg  flex justify-center items-center font-bold  text-[#161622] bg-[#ff8c00]">
                <Text className="text-lg font-semibold" >Back To Explore</Text>
              </TouchableOpacity>
      </View> */}

      <ScrollView className="flex mb-5 max-h-fit">
      {posts.length>0&&posts.map((post,index)=>(<Post key={`${index}+443ewer3`} videoURL={post.videoURL} title={post.title} thumbnail={post.thumbnail} owner={post.creator.username} ownerImg = {post.creator.avatar}/>))}
      </ScrollView>
    
    
    
  </SafeAreaView>
  )
}

export default Profile