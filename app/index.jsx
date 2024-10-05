import {   Button, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/images/logo.png"
import Cards from "../assets/images/cards.png"
import { Link, router } from "expo-router";
export default function Index() {

  let handlePress = () =>{
      router.push("/(auth)/signup")
  }


  return (
    <View className=" flex-1 bg-[#161622] items-center gap-5 pt-10 ">
        <Image resizeMode="contain" className="w-1/2 h-10" source={Logo}></Image>
        <Image resizeMode="contain" className="w-[100%] h-[260px]" source={Cards}></Image>
        
        <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-[#ff8c00]">Aora</Text>
            </Text>
        <Text className="text-[#CDCDE0] w-[80%] text-center">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora. </Text>
        
        
        <TouchableOpacity onPress={handlePress} className=" py-2 px-20 flex items-center justify-center text-center rounded-sm text-[#161622] bg-[#ff8c00] ">
          <Text className= "font-semibold text-2x">Continue with Email</Text>
        </TouchableOpacity>
       

       <Link href={'/(tabs)/home'}> <Text className="text-white">Go to tabs (temporary)</Text></Link>
    </View>
  );
}
