import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import uploadImage from "../../assets/icons/upload.png"
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { appwriteConfig, databases, storage } from '../../lib/appwrite';
import { ID } from 'react-native-appwrite';


const Create = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    try {
       let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
     
      quality: 1,
    });

    console.log("image picker")
    console.log(result.assets[0].uri);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      
      
      const { mimeType, ...rest } = result.assets[0];
      const asset = { type: mimeType, ...rest };
      
      //upload image 
      const promise = await storage.createFile(
        appwriteConfig.thumbnailStorageId,
        ID.unique(),
        asset
        
    );
    console.log(promise);
    

    let fileUrl =await storage.getFilePreview(
      appwriteConfig.storageId,
      promise?.$id,
      2000,
      2000,
      "top",
      100
    );
    console.log(fileUrl)
    
    }
    } catch (error) {
      console.log(error)
    }
   
  };  


  const createPost = async (title) =>{

    try {
       const promise =await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId,
      ID.unique(),
      {
        title:"hii",
        prompt:"efd",
        thumbnail:"https://images.unsplash.com/photo-1724510637078-274e1b12ee91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        creator:"670201e70038e8cdece7",
        videoURL:"https://images.unsplash.com/photo-1724510637078-274e1b12ee91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
  );
    } catch (error) {
      console.log(error);
    }
   
  
    
  }


  















  return (
    <SafeAreaView className=" flex-1 bg-[#161622] items-center">
    <View className="w-[90%] h-full  ">

      <Text className="font-psemibold text-2xl text-white">Upload Video</Text>

      <View className="mt-10 ">
        <Text className="font-pregular text-sm text-white mb-2">Video Title</Text>
        <TextInput placeholder='Give your video a catchy title'  placeholderTextColor={"#7B7B8B"} className="h-[50px]  text-white bg-[#1E1E2D] px-2"/>
      </View>
     
        
      <View className="mt-4">
          <Text className="font-pregular text-sm text-white mb-2">Select Video</Text>
          <View className="items-center h-[100px] justify-center bg-[#1e1e2d] "><Image resizeMode='contain' className="h-[50%]" source={uploadImage} ></Image></View>
        
      </View>
      <View className="mt-4">
        <Text className="font-pregular text-sm text-white mb-2">Thumbnail Image</Text>
        <View className="items-center  h-[59px] bg-[#1e1e2d]  flex-row  justify-center gap-x-2">
          {!image&&<Image resizeMode='cover' className="h-[30px] w-[20px]" source={uploadImage} ></Image>}
          {!image&&<Text onPress={pickImage} className="font-pmedium text-white">Select an image.</Text>}
          {image && <Image className="w-full h-full " source={{ uri: image }}  />}
        </View>
      </View>

      <View className="mt-4">
          <Text className="font-pregular text-sm text-white mb-2">AI prompt</Text>
          <TextInput placeholder='The AI prompt of your video..'  placeholderTextColor={"#7B7B8B"} className="h-[50px]  text-white bg-[#1E1E2D] px-2"/>
      </View>

      <TouchableOpacity onPress={createPost} className="mt-4 py-3 px-2  rounded-lg  flex justify-center items-center font-bold  text-[#161622] bg-[#ff8c00]">
              <Text className="text-lg font-semibold">Submit & Publish</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default Create