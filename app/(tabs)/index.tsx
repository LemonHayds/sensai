import ProfilePicture from "../../components/user/ProfilePicture";
import Welcome from "../../components/user/Welcome";
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import { Card } from "../../components/common/card";
import { HeadingText } from "../../components/common/text";

export default function Home() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 px-4 bg-light-paper dark:bg-light-black">
      <View className="flex flex-row items-center w-full">
        <HeadingText text="Good Morning Hayden" customClassName="flex-1" />
        <View className="flex-none">
          <ProfilePicture customClassName="flex-auto" />
        </View>
      </View>
      <View className="my-2">
        <HeadingText text="Summary" />
        <View className="flex-row">
          <Card customClassName="my-2 w-full h-[200px]"></Card>
          <Card customClassName="my-2 w-full h-[200px]"></Card>
        </View>
        <Card customClassName="my-2 w-full h-[200px]"></Card>
      </View>
      <View>
        <HeadingText text="Your tasks" customClassName="text-lg" />
        <Card customClassName="my-2 w-full h-[50px]"></Card>
      </View>
    </View>
  );
}
