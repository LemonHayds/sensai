import { Text, View } from "react-native";
import TextStyles from "../../constants/text-styles";

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

export const BodyText = (props: TextProps) => {
  const { text, customClassName } = props;
  return (
    <Text
      className={`${BaseTextClassNames} ${customClassName}`}
      style={{ ...TextStyles.body, fontWeight: "100" }}
    >
      {text}
    </Text>
  );
};

export const SensaiText = (props: TextProps) => {
  const { text, customClassName } = props;
  return (
    <Text
      className={`${BaseTextClassNames} ${customClassName}`}
      style={{ ...TextStyles.sensai }}
    >
      {text}
    </Text>
  );
};
