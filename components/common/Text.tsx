import { Text } from "react-native";
import TextStyles from "../../constants/TextStyles";

type TextProps = {
  text: string;
  className?: string;
};

export const HeadingText = (props: TextProps) => {
  const { text, className } = props;
  return (
    <Text className={className} style={{ ...TextStyles.heading }}>
      {text}
    </Text>
  );
};

export const SubHeadingText = (props: TextProps) => {
  const { text, className } = props;
  return (
    <Text className={className} style={{ ...TextStyles.subheading }}>
      {text}
    </Text>
  );
};

export const BodyText = (props: TextProps) => {
  const { text, className } = props;
  return (
    <Text className={className} style={{ ...TextStyles.body }}>
      {text}
    </Text>
  );
};
