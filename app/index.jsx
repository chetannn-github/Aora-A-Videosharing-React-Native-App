import {  ScrollView, Text, View } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
export default function Index() {
  return (
    <View style={{flex:1}} className="h-full flex-1 bg-red-500">
     <ExpoStatusBar backgroundColor="rgba(133,242,242,0.7)" style="dark" translucent={false} />
      <Text className = " text-white">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
