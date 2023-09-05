import ProfilePicture from "../../components/user/ProfilePicture";
import Welcome from "../../components/user/Welcome";
import { View, Switch, SafeAreaView } from "react-native";
import { useColorScheme } from "nativewind";
import { Card } from "../../components/common/Card";
import { HeadingText } from "../../components/common/Text";
import { Text } from "react-native";
import TextStyles from "../../constants/TextStyles";

export default function Home() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 p-6 bg-light-paper dark:bg-light-black">
      <View className="flex flex-row items-center w-full">
        {/* <Text className="flex-1" style={{ ...TextStyles.heading }}>
          Good Morning Hayden
        </Text> */}
        <HeadingText text="Good Morning Hayden" customClassName="flex-1" />
        <View className="flex-none">
          <ProfilePicture customClassName="flex-auto" />
        </View>
      </View>
      <View>
        <Card customClassName="mt-2 w-full h-[200px] rounded-lg"></Card>
      </View>
      {/* Charts */}
      {/* <View className="flex flex-row">
          <Card customClassName="flex-1 h-[200px]"></Card>
          <Card customClassName="flex-1 h-[200px]"></Card>
        </View> */}
    </View>
  );
}
