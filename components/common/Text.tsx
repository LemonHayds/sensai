import { Text, View } from "react-native";
import TextStyles from "../../constants/TextStyles";

type TextProps = {
  text: string;
  customClassName?: string;
};

const BaseTextClassNames = "text-black dark:text-white";

export const HeadingText = (props: TextProps) => {
  const { text, customClassName } = props;
  return (
    <Text
      className={`${BaseTextClassNames} ${customClassName}`}
      style={{ ...TextStyles.heading }}
    >
      {text}
    </Text>
  );
};

export const SubHeadingText = (props: TextProps) => {
  const { text, customClassName } = props;
  return (
    <Text
      className={`${BaseTextClassNames} ${customClassName}`}
      style={{ ...TextStyles.subheading }}
    >
      {text}
    </Text>
  );
};

export const TitleText = (props: TextProps) => {
  const { text, customClassName } = props;
  return (
    <Text
      className={`${BaseTextClassNames} ${customClassName}`}
      style={{ ...TextStyles.title }}
    >
      {text}
    </Text>
  );
};

export const BodyText = (props: TextProps) => {
  const { text, customClassName } = props;
  return (
    <Text
      className={`${BaseTextClassNames} ${customClassName}`}
      style={{ ...TextStyles.body }}
    >
      {text}
    </Text>
  );
};
