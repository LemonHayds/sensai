import { HeadingText } from "../common/Text";

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
    <HeadingText text={`${GreetingMessage()}, ${name}`} className={className} />
  );
}
