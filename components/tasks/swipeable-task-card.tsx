import { TouchableWithoutFeedback, View, Text } from "react-native";
import { Card } from "../common/card";
import { BodyText, HeadingText } from "../common/text";
import GlassContainer from "../common/glass-container";

export const SwipeableTaskCard = (props: SwipeableTaskCardProps) => {
  const SwipeableTaskCardClassNames = "min-h-[200px] px-4 py-4";
  const { task, setSelectedTask, customClassName } = props;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelectedTask(task);
      }}
    >
      <View>
        <Card
          customClassName={`${SwipeableTaskCardClassNames} ${customClassName}`}
        >
          <View className="flex-1 flex-col">
            <View className="flex-row items-center">
              <GlassContainer customClassName="mr-3 w-[45px] h-[45px]">
                <View className="flex-row items-center opacity-100">
                  {task.icon}
                </View>
              </GlassContainer>
              <View>
                <HeadingText text={task.title} customClassName="text-xl" />
                <BodyText text={task.time} />
              </View>
            </View>

            <View className="w-full mt-2">
              <BodyText text={task.description} />
            </View>
          </View>
        </Card>
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
