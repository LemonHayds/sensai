import { View, TouchableWithoutFeedback } from "react-native";
import { Text } from "react-native";
import { BodyText, HeadingText, SubHeadingText } from "../core/text";

export const SwipeableTaskCard = (props: SwipeableTaskCardProps) => {
  const SwipeableTaskCardClassNames =
    "min-h-[200px] p-4 shadow bg-white rounded-xl";
  const { task, setSelectedTask, customClassName } = props;

  return (
    <TouchableWithoutFeedback onPress={() => setSelectedTask(task)}>
      <View className={`${SwipeableTaskCardClassNames} ${customClassName}`}>
        <View className="flex-1 flex-col">
          <View className="flex-row items-center">
            <View className="flex-row items-center mr-2">{task.icon}</View>
            <HeadingText text={task.title} />
          </View>

          <View className="w-full p-4 bg-white">
            <BodyText text={task.description} />
            <Text className="text-sm">{task.date}</Text>
            <Text className="text-sm">{task.time}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SwipeableTaskCard;

type SwipeableTaskCardProps = {
  setSelectedTask: (task: TaskType | null) => void;
  task: TaskType;
  customClassName?: string;
};

export type TaskType = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  date: string;
  time: string;
  icon: React.ReactNode;
};
