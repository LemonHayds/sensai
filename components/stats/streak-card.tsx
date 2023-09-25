import { View } from "react-native";

import GlobalClasses from "../../constants/styles/global.classes";
import { Card } from "../common/card";
import { HeadingText } from "../common/text";

type StreakCardProps = {
  streak: number;
  customClassName?: string;
};

const StreakCard = (props: StreakCardProps) => {
  return (
    <Card customClassName={`${props.customClassName} ${GlobalClasses.bg}`}>
      <View className="h-full flex flex-col justify-center items-center">
        <HeadingText text="10" customClassName="text-3xl" />
        <HeadingText text="Streak" customClassName="text-2xl" />
      </View>
    </Card>
  );
};

export default StreakCard;
