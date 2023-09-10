import { View } from "react-native";

type CardProps = {
  children?: React.ReactNode;
  customClassName?: string;
};

const CardClassNames =
  "mx-4 bg-paper/90 border-[1px] border-white/90 rounded-xl";

export const Card = (props: CardProps) => {
  const { children, customClassName } = props;
  return (
    <View className={`${CardClassNames} ${customClassName}`}>{children}</View>
  );
};
