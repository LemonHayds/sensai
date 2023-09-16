import { Text } from "react-native";
import TextStyles from "../../constants/styles/text.styles";
import GlobalClasses from "../../constants/styles/global.classes";

type TextProps = {
  text?: string;
  additionalStyles?: any;
  customClassName?: string;
};

const BaseTextClassNames = `${GlobalClasses["text-color"]}`;

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
      className={`mb-[3.5px] ${BaseTextClassNames} ${customClassName}`}
      style={{ ...TextStyles.sensai }}
    >
      {text}
    </Text>
  );
};
