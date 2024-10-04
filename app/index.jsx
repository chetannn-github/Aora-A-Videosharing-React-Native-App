import {  SafeAreaView, Text, View } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className=" flex-1 bg-pink-400">
      <ExpoStatusBar backgroundColor="pink" style="dark" translucent={false} />
      <Link href={"/(auth)/login"}>
      
        <Text className = " text-white" >Get started!</Text>
      </Link> 
      <Link href={"/(tabs)/home"}>
      
        <Text className = " text-white" >Go to home!</Text>
      </Link>
    </SafeAreaView>
  );
}
