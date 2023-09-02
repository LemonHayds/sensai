import ProfilePicture from "../../components/ProfilePicture";
import Welcome from "../../components/Welcome";
import { View, Text, SafeAreaView } from "react-native";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <View className="p-4 bg-light-paper flex flex-row justify-between h-full">
        <Welcome name="Hayden" />
        <ProfilePicture />
      </View>
    </SafeAreaView>
  );
}
