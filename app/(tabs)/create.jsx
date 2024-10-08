import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import uploadImage from "../../assets/icons/upload.png"
import { appwriteConfig, databases, storage } from '../../lib/appwrite';
import { ID } from 'react-native-appwrite';
import * as DocumentPicker from "expo-document-picker";
import { useSelector } from 'react-redux';
import { router } from 'expo-router';

const Create = () => {
  let loggedInUser = useSelector((store)=>(store.user.loggedInUser));
  const [image, setImage] = useState(null);
  const [video,setVideo] = useState(null);
  

  let [imageURL,setImageURL] = useState(null);
  let [videoURL,setVideoURL] = useState(null);
  let [title,setTitle] = useState(null);
  let [prompt,setPrompt] = useState(null);

  const pickImage = async (selectType) => {
    // No permissions request is necessary for launching the image library
    try {
   
      const result = await DocumentPicker.getDocumentAsync({
        
        type:selectType ==="image" ?  ["image/png", "image/jpg"]:["video/mp4", "video/gif"]
      });
  

    

    if (!result.canceled) {
      selectType ==="image"?setImage(result.assets[0].uri):setVideo(result.assets[0].uri);
      
      
      const { mimeType,fileName, uri,...rest } = result.assets[0];
      const asset = { type: mimeType,name:fileName,uri,...rest};
       
      //upload image
      const promise = await storage.createFile(
        appwriteConfig.storageId,
        ID.unique(),
        asset
        
    );
    // console.log(promise);
    const url =await storage.getFileView(appwriteConfig.storageId,promise.$id);

    console.log(url)
    selectType ==="image"?setImageURL(url):setVideoURL(url);
      

    }
    
    
    } catch (error) {
      console.log(error)
    }
   
  };  


  const createPost = async () =>{

    try {
      console.log("post create ho rhii hh");
      
      console.log(imageURL);
      console.log(videoURL);
       const promise =await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId,
      ID.unique(),
      {
        title:title,
        prompt:prompt,
        thumbnail:imageURL,
        creator:loggedInUser.$id,
        videoURL:videoURL
      }
      
    );
    router.navigate("/home")
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
        <TextInput onChangeText={(text)=>setTitle(text)} placeholder='Give your video a catchy title'  placeholderTextColor={"#7B7B8B"} className="h-[50px]  text-white bg-[#1E1E2D] px-2"/>
      </View>
     
        
      <View className="mt-4">
          <Text className="font-pregular text-sm text-white mb-2">Select Video</Text>
          <View  className="items-center h-[100px] justify-center bg-[#1e1e2d] ">
            <Image resizeMode='contain' className="h-[50%]" source={uploadImage} ></Image>
            {!image&&<Text onPress={()=>pickImage("video")} className="font-pmedium text-white">Select a video.</Text>}
          </View>
        
      </View>
      <View className="mt-4">
        <Text className="font-pregular text-sm text-white mb-2">Thumbnail Image</Text>
        <View className={`items-center ${image? "h-[250px]":"h-[80px]"}  bg-[#1e1e2d]  flex-row  justify-center gap-x-2`}>
          {!image&&<Image resizeMode='cover' className="h-[30px] w-[20px]" source={uploadImage} ></Image>}
          {!image&&<Text onPress={()=>pickImage("image")} className="font-pmedium text-white">Select an image.</Text>}
          {image && <Image  resizeMode='contain' className="w-full h-full " source={{ uri: image }}  />}
        </View> 
      </View>

      <View className="mt-4">
          <Text className="font-pregular text-sm text-white mb-2">AI prompt</Text>
          <TextInput onChangeText={(text)=>setPrompt(text)} placeholder='The AI prompt of your video..'  placeholderTextColor={"#7B7B8B"} className="h-[50px]  text-white bg-[#1E1E2D] px-2"/>
      </View>

      <TouchableOpacity onPress={createPost} className="mt-4 py-3 px-2  rounded-lg  flex justify-center items-center font-bold  text-[#161622] bg-[#ff8c00]">
              <Text className="text-lg font-semibold">Submit & Publish</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default Create