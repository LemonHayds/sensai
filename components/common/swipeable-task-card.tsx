import { View, TouchableWithoutFeedback } from "react-native";
import { Text } from "react-native";

export const SwipeableTaskCard = (props: SwipeableTaskCardProps) => {
  const SwipeableTaskCardClassNames =
    "h-[300px] mb-2 shadow bg-white rounded-xl";
  const { task, setSelectedTask, customClassName } = props;

  return (
    <TouchableWithoutFeedback onPress={() => setSelectedTask(task)}>
      <View className={`${SwipeableTaskCardClassNames} ${customClassName}`}>
        <View className="flex flex-row items-center">
          <View className="flex flex-col">
            <Text className="text-lg font-bold">{task.title}</Text>
            <Text className="text-sm">{task.description}</Text>
          </View>
          <View className="flex flex-col">
            <Text className="text-sm">{task.date}</Text>
            <Text className="text-sm">{task.time}</Text>
          </View>
          <View className="flex flex-col">
            <Text className="text-sm">{task.icon}</Text>
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
