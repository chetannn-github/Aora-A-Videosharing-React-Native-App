import { View, Text, TextInput, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'
import Post from '../../components/Post/Post'
import { useSelector } from 'react-redux'
import { appwriteConfig, databases } from '../../lib/appwrite'


const Home = () => {
  let loggedInUser = useSelector((store)=>(store.user.loggedInUser));
  let searchTxt = useRef("");
  let [isRefresh , setIsRefresh] = useState(false);
 
    // get all posts 
let [posts , setPosts] = useState([]);
let [copyPosts,setCopyPosts] =useState([])
  let getAllPosts = async () =>{
    try {
      let res= await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId,

      )
       setPosts(res?.documents)
       setCopyPosts(res?.documents)
       console.log(posts[0])


      

    } catch (error) {
      console.log(error)
    }
  }
  
   useEffect(()=>{getAllPosts()},[]) 

   
   let searchPosts = () =>{
    if(searchPosts.length==0){ setPosts(copyPosts); return;}
    let searchedPosts = posts.filter(post => {
      const postText = `${post.title} ${post.prompt} ${post.creator.username} ${post.creator.email}`;
      for (let i = 0; i < searchTxt.current.length; i++) {
        if (postText.toLowerCase().includes(searchTxt.current[i].toLowerCase())) {
          return true;
        }
      }
     
      return false;
    });
    setPosts(searchedPosts)
   }


   let handleRefresh = ()=>{
    setIsRefresh(true);
    getAllPosts();
    setIsRefresh(false);
}




  return (
    <SafeAreaView className="  bg-[#161622] w-full mb-[100px] items-center" >
      <View className="w-[90%]  h-fit ">
        <Text className="text-[#CDCDE0] text-[14px]  font-pregular">Welcome Back</Text>
              <Text className="text-white text-2xl font-pregular mb-2">{loggedInUser?.username} </Text>

              <View className="flex flex-row w-full rounded-md overflow-hidden items-center">
                <TextInput placeholder='Search for video topic' onChangeText={(text) => searchTxt.current = text}  placeholderTextColor={"#7B7B8B"} className="h-[50px] w-[90%] text-white bg-[#1E1E2D] px-2"/>
                <View  className="absolute right-0 bottom-0 bg-[#1E1E2D] justify-center w-[10%] h-full ">
                <FontAwesome onPress={searchPosts} size={28} name="search" color={"white"}  /></View>
              </View>
      </View>
      

      <ScrollView refreshControl={<RefreshControl refreshing={isRefresh} 
            onRefresh={handleRefresh}/>} className="flex mb-5 max-h-fit w-full">
        {!posts &&<Text className="text-black">Loading.....</Text>}
       {posts.length>0&&posts.map((post,index)=>(<Post key={index} title={post.title} thumbnail={post.thumbnail} owner={post.creator.username} ownerImg = {post.creator.avatar} videoURL={post.videoURL}/>))}
      </ScrollView>

      
    </SafeAreaView>
  )
}

export default Home