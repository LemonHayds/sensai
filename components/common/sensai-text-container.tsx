import { View } from "react-native";
import { useColorScheme } from "nativewind";
import GlobalClasses from "../../constants/styles/global.classes";

type SensaiTextContainerProps = {
  children: React.ReactNode;
  customClassName?: string;
};

export default function SensaiTextContainer(props: SensaiTextContainerProps) {
  const { children, customClassName } = props;
  const { colorScheme } = useColorScheme();

  return (
    <View
      className={`max-w-[220px] rounded-lg bg-light-red/90 text-white ${customClassName}`}
    >
      <View
        className={`rounded px-2 m-1 border-[2px] ${
          colorScheme === "dark" ? "border-black" : "border-white"
        } flex-row items-center`}
      >
        <View className="m-auto">{children}</View>
      </View>
    </View>
  );
}
