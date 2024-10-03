import {  SafeAreaView, Text, View } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className=" flex-1 bg-pink-500">
      <ExpoStatusBar backgroundColor="pink" style="dark" translucent={false} />
      <Link href={"/(tabs)/home"}>
      
        <Text className = " text-white" >Go to home!</Text>
      </Link>
    </SafeAreaView>
  );
}
