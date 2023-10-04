import { View } from "react-native";
import { useColorScheme } from "nativewind";

export const GlassContainer = (props: GlassContainerProps) => {
  const { children, color, customClassName } = props;
  const { colorScheme } = useColorScheme();

  return (
    <View
      className={`flex-row items-center justify-center relative ${customClassName}`}
    >
      <View
        style={{ backgroundColor: color }}
        className={`rounded-lg backdrop-filter backdrop-blur-xl w-full h-full ${
          colorScheme === "dark" ? "opacity-30" : "opacity-20"
        }`}
      ></View>
      <View className="absolute m-auto">{children}</View>
    </View>
  );
};

export default GlassContainer;

type GlassContainerProps = {
  color?: string;
  children: React.ReactNode;
  customClassName?: string;
};
