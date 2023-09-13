import { Text } from "react-native";
import TextStyles from "../../constants/styles/text.styles";

type TextProps = {
  text?: string;
  additionalStyles?: any;
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
  const { text, additionalStyles, customClassName } = props;
  return (
    <Text
      className={`${BaseTextClassNames} ${customClassName}`}
      style={{ ...TextStyles.body, ...additionalStyles }}
    >
      {text}
    </Text>
  );
};

export const SensaiText = (props: TextProps) => {
  const { text, customClassName } = props;
  return (
    <Text
      className={`mb-[2px] ${BaseTextClassNames} ${customClassName}`}
      style={{ ...TextStyles.sensai }}
    >
      {text}
    </Text>
  );
};
