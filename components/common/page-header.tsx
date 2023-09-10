import { HeadingText, SensaiText } from "./text";
import SensaiTextContainer from "./sensai-text-container";
import { View } from "react-native";
import ProfilePicture from "../user/profile-pictuer";

type PageHeaderProps = {
  type: "welcome" | "date";
  user?: any;
  profileSize?: number;
  customClassName?: string;
};

export default function PageHeader(props: PageHeaderProps) {
  const { type = "welcome", profileSize = 50, user, customClassName } = props;

  switch (type) {
    case "welcome":
      return (
        <View>
          <HeadingText text="`Good Morning ${user?.name}`" />
        </View>
      );
    case "date":
      const formattedDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      });

      return (
        <View className="relative bg-paper shadow-sm px-4 pb-4 border-b border-white">
          <View className="flex-row justify-between">
            <View>
              <HeadingText
                text={`Today`}
                customClassName="text-3xl font-bold mb-1"
              />
              <SensaiTextContainer customClassName="mt-1">
                <SensaiText
                  text={formattedDate.toString()}
                  customClassName="w-fit text-xl text-white dark:text-white"
                />
              </SensaiTextContainer>
            </View>
            <View>
              <ProfilePicture width={profileSize} height={profileSize} />
            </View>
          </View>
          <View className="bg-light-red absolute bottom-[-1px] left-0 h-[3px] w-[100px]"></View>
        </View>
      );
  }
}
