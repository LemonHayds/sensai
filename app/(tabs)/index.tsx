import ProfilePicture from "../../components/user/ProfilePicture";
import Welcome from "../../components/user/Welcome";
import { View, Switch, SafeAreaView, Text } from "react-native";
import { useColorScheme } from "nativewind";

export default function TabOneScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView>
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />

      <View className="h-full p-4 bg-light-paper dark:bg-light-black transition-all duration-500 ease-in-out">
        <View className="flex flex-row">
          <Welcome name="Hayden" />
          <ProfilePicture />
        </View>
        <View>
          <Text>Sensai</Text>
          <Text style={{ fontFamily: "Urbanist", fontSize: 50 }}>Sensai</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
