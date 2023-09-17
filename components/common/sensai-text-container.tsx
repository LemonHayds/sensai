import { View } from "react-native";
import { useColorScheme } from "nativewind";
import GlobalClasses from "../../constants/styles/global.classes";
import { BlurView } from "expo-blur";

type SensaiTextContainerProps = {
  children: React.ReactNode;
  customClassName?: string;
};

export default function SensaiTextContainer(props: SensaiTextContainerProps) {
  const { children, customClassName } = props;
  const { colorScheme } = useColorScheme();

  return (
    <BlurView
      className={`max-w-[220px] rounded-[3px] bg-light-red text-white ${customClassName}`}
    >
      <View
        className={`rounded-[3px] px-[6px] m-[2px] border-[2px] ${
          colorScheme === "dark" ? "border-black" : "border-white"
        } flex-row items-center`}
      >
        <View className="m-auto">{children}</View>
      </View>
    </BlurView>
  );
}
