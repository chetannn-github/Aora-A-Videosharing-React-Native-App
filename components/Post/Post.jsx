import { Button, Image, Pressable, Text, View } from 'react-native'
import React, { Component, useRef, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import PostThumbnail from "../../assets/preview/homepage.jpeg"
import PostImage from "../../assets/images/thumbnail.png"
import Profile from "../../assets/images/profile.png"
import { Video, ResizeMode } from 'expo-av';

let Post = ({title,owner,ownerImg,thumbnail,videoURL})=> {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  let togglePlayPause=() =>{
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
  }
    return (
      <View className="w-[100%]  items-center gap-y-3 mt-2 ">

        
        <View className="flex flex-row   w-[90%] items-start justify-between">
          <View className="w-[48px] h-[40px] border-[1.5px] border-secondary rounded-md overflow-hidden ">
            <Image resizeMode='cover' source={{uri:ownerImg}} className="h-full w-full " ></Image>
           
          </View>
            <View className="w-[80%]   flex ">
              <Text className="text-white text-[14px] font-pregular ">{title}</Text> 
              <Text className="text-[#CDCDE0] text-xs font-pregular">{owner}</Text>
            </View>
            <FontAwesome size={22} name="ellipsis-v" color={"#CDCDE0"} className="" />
        </View>
        
        
        <Pressable onPress={togglePlayPause} className="w-[90%] h-[300px] rounded-lg"> 
        <View  className="">
           <Image  resizeMode='cover' className="w-full h-[300px] rounded-lg" source={{uri:thumbnail}}  ></Image> 
            <Video className="w-full h-[300px] rounded-lg absolute"
            ref={video}
            source={{
            uri:videoURL,
            }}
            resizeMode={ResizeMode.COVER}
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

        </View>
       </Pressable>
 
     

      </View>
    )
  }


export default Post