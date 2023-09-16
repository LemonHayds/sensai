import { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { CheckIcon } from "react-native-heroicons/mini";
import { useColorScheme } from "nativewind";
import BorderedButton from "../common/bordered-button";
import { Card } from "../common/card";
import GlassContainer from "../common/glass-container";
import { BodyText, HeadingText } from "../common/text";
import { useRouter } from "expo-router";
import Animated from "react-native-reanimated";
import GlobalClasses from "../../constants/styles/global.classes";

export const TaskCard = (props: TaskCardProps) => {
  const TaskCardClassNames = `${GlobalClasses.bg} px-4 py-4`;
  const {
    task,
    setSelectedTask,
    completedTasksCount,
    setCompletedTasksCount,
    customClassName,
  } = props;
  const [complete, setComplete] = useState(false);

  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const handleTaskComplete = () => {
    setComplete((prevComplete: boolean) => {
      const isComplete = !prevComplete;
      const updatedCount = isComplete
        ? completedTasksCount + 1
        : completedTasksCount - 1;

      setCompletedTasksCount(updatedCount);

      return isComplete;
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelectedTask(task);
        router.push("/task-detail");
      }}
    >
      <View className="flex-1">
        <Card
          customClassName={`border-[1px] shadow-sm ${
            complete
              ? `${colorScheme === "dark" ? "border-grey" : "border-grey/30"}`
              : `${colorScheme === "dark" ? "border-black" : "border-white/60"}`
          } ${TaskCardClassNames} ${customClassName}`}
        >
          <View className="flex-row justify-between">
            <View className="flex-row items-center">
              <Animated.View sharedTransitionTag={`task.${task.id}.icon`}>
                <GlassContainer customClassName="mr-3 w-[40px] h-[40px]">
                  <View className="flex-row items-center">{task.icon}</View>
                </GlassContainer>
              </Animated.View>

              <View className="flex-col justify-start items-start">
                <HeadingText text={task.title} customClassName="text-[16px]" />
                <BodyText text={`${task.time} pm`} />
              </View>
            </View>

            <View>
              <BorderedButton
                onPress={() => handleTaskComplete()}
                parentColor={GlobalClasses.bg}
              >
                <CheckIcon
                  color={colorScheme === "dark" && complete ? "black" : "white"}
                  size={15}
                />
              </BorderedButton>
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TaskCard;

type TaskCardProps = {
  setSelectedTask: (task: TaskType | null) => void;
  task: TaskType;
  completedTasksCount: number;
  setCompletedTasksCount: (count: number) => void;
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
