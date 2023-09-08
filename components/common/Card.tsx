import { View } from "react-native";

type CardProps = {
  children?: React.ReactNode;
  customClassName?: string;
};

const CardClassNames = "shadow bg-white rounded-xl";

export const Card = (props: CardProps) => {
  const { children, customClassName } = props;
  return (
    <View className={`${CardClassNames} ${customClassName}`}>{children}</View>
  );
};
