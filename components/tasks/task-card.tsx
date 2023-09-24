import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import { YinYang } from "phosphor-react-native";
import { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { CheckIcon } from "react-native-heroicons/mini";
import Animated from "react-native-reanimated";

import GlobalClasses from "../../constants/styles/global.classes";
import TaskType from "../../types/task.type";
import BorderedButton from "../common/bordered-button";
import { Card } from "../common/card";
import GlassContainer from "../common/glass-container";
import { BodyText, HeadingText } from "../common/text";

const TaskCardClassNames = `border-[1px] shadow-sm ${GlobalClasses.bg}`;

export const TaskCard = (props: TaskCardLayoutProps) => {
  const {
    task,
    setSelectedTask,
    completedTasksCount,
    setCompletedTasksCount,
    cardType = "small",
    handleCardTap,
    customClassName,
  } = props;
  const [complete, setComplete] = useState(false);

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
    <TouchableWithoutFeedback onPress={handleCardTap}>
      <>
        {cardType === "small" && (
          <TaskCardSmall
            task={task}
            complete={complete}
            handleTaskComplete={handleTaskComplete}
            customClassName={customClassName}
          />
        )}

        {cardType === "large" && (
          <TaskCardLarge
            task={task}
            complete={complete}
            handleTaskComplete={handleTaskComplete}
            customClassName={customClassName}
          />
        )}
      </>
    </TouchableWithoutFeedback>
  );
};

const TaskCardSmall = (props: TaskCardProps) => {
  const { task, complete, handleTaskComplete, customClassName } = props;
  const { colorScheme } = useColorScheme();

  return (
    <Card
      customClassName={`
      px-4 py-4
      ${
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
  );
};

const TaskCardLarge = (props: TaskCardProps) => {
  const { task, complete, handleTaskComplete, customClassName } = props;
  const { colorScheme } = useColorScheme();

  return (
    <Card
      customClassName={`
      p-4
      ${
        complete
          ? `${colorScheme === "dark" ? "border-grey" : "border-grey/30"}`
          : `${colorScheme === "dark" ? "border-black" : "border-white/60"}`
      } ${TaskCardClassNames} ${customClassName}`}
    >
      <View className="flex-row items-center justify-center my-2">
        <View className="flex justify-center items-center bg-light-red/50 rounded-full f h-[140px] w-[140px] p-6">
          <YinYang
            color={colorScheme === "dark" ? "white" : "white"}
            weight="fill"
            size={110}
          />
        </View>
      </View>
      <HeadingText text={task.title} customClassName="text-3xl mb-2" />
      {/* <BodyText text={`${task.time} pm`} /> */}
      <BodyText text={task.description} />
    </Card>
  );
};

export default TaskCard;

type TaskCardLayoutProps = {
  cardType?: "small" | "large";
  setSelectedTask: (task: TaskType | {}) => void;
  task: TaskType;
  completedTasksCount: number;
  setCompletedTasksCount: (count: number) => void;
  handleCardTap?: () => void;
  customClassName?: string;
};

type TaskCardProps = {
  complete: boolean;
  handleTaskComplete: () => void;
  task: TaskType;
  completedTasksCount?: number;
  customClassName?: string;
};
