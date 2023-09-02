import { Text, View } from "react-native";

type WelcomeProps = {
  name: string;
  className?: string;
};

export default function Welcome(props: WelcomeProps) {
  const { name, className } = props;

  const GreetingMessage = () => {
    return "Good Morning";
  };

  return (
    <Text
      className={`text-2xl text-light-black ${className}`}
    >{`${GreetingMessage()} ${name}`}</Text>
  );
}
