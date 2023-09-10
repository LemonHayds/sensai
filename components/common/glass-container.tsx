import { View } from "react-native";

export const GlassContainer = (props: GlassContainerProps) => {
  const { children, customClassName } = props;

  return (
    <View
      className={`flex-row items-center justify-center relative ${customClassName}`}
    >
      <View
        className={`bg-light-red rounded-lg backdrop-filter opacity-10 backdrop-blur-xl w-full h-full`}
      ></View>
      <View className="absolute m-auto">{children}</View>
    </View>
  );
};

export default GlassContainer;

type GlassContainerProps = {
  children: React.ReactNode;
  customClassName?: string;
};
