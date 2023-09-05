import { HeadingText } from "../common/Text";

type WelcomeProps = {
  name: string;
  customClassName?: string;
};

export default function Welcome(props: WelcomeProps) {
  const { name, customClassName } = props;

  const GreetingMessage = () => {
    return "Good Morning";
  };

  return (
    <HeadingText
      text={`${GreetingMessage()}, ${name}`}
      customClassName={`text-red-500 ${customClassName}`}
    />
  );
}
