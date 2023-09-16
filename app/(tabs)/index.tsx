import ProfilePicture from "../../components/user/profile-pictuer";
import { View } from "react-native";
import { Card } from "../../components/common/card";
import { HeadingText } from "../../components/common/text";
import GlobalClassNames from "../../constants/styles/global.classes";

export default function Home() {
  return (
    <View className={`flex-1 px-4 ${GlobalClassNames.bg}`}>
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
