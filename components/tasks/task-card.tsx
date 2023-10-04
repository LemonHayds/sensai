import { useColorScheme } from "nativewind";
import { useContext, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { CheckIcon } from "react-native-heroicons/mini";
import { CalendarIcon, ClockIcon } from "react-native-heroicons/mini";

import colorsStyles from "../../constants/styles/colors.styles";
import GlobalClasses from "../../constants/styles/global.classes";
import TaskType from "../../types/task.type";
import BorderedButton from "../common/bordered-button";
import { Card } from "../common/card";
import { BodyText, HeadingText } from "../common/text";
import { IconParser } from "../../constants/parsers/icons.parser";
import IconContainer from "../common/icon-container";
import { getColorByKey } from "../../utils/common.utils";
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
            handleCardTap={handleCardTap}
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
  const { handleCardTap, task, complete, handleTaskComplete, customClassName } =
    props;
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
      {/* @ts-ignore */}
      <TouchableWithoutFeedback onPress={() => handleCardTap(task)}>
        <View className="flex-row justify-between">
          <View className="flex-row items-center">
            <IconContainer color={getColorByKey(task.color || "")}>
              <IconParser iconKey={task.icon} size={25} />
            </IconContainer>

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
      </TouchableWithoutFeedback>
    </Card>
  );
};

const TaskCardLarge = (props: TaskCardProps) => {
  const { task, complete, handleTaskComplete, customClassName } = props;
  const { colorScheme } = useColorScheme();

  return (
    <Card
      customClassName={`
      px-5 pt-1 pb-4 flex flex-col
      ${
        complete
          ? `${colorScheme === "dark" ? "border-grey" : "border-grey/30"}`
          : `${colorScheme === "dark" ? "border-black" : "border-white/60"}`
      } ${TaskCardClassNames} ${customClassName}`}
    >
      <View className="mb-2">
        <View className="flex-row items-center justify-center my-4 bg-red w-full rounded-lg">
          <View className="py-4 opacity-90 m-auto">
            <IconParser iconKey={task.icon} size={100} />
          </View>
        </View>
        <HeadingText text={task.title} customClassName="text-3xl mb-2" />
        <BodyText text={task.description} customClassName="mb-2 opacity-80" />
      </View>
      <View className="flex flex-row justify-between">
        <View className="flex flex-row">
          <ClockIcon
            size={20}
            color={colorScheme === "dark" ? colorsStyles["grey"] : "black"}
            className="text-black dark:text-white/60"
          />
          <BodyText
            text="7:00 am - 8:00 am (1 hour)"
            customClassName="ml-1.5 text-black dark:text-white/60"
          />
        </View>
        <View className="flex flex-row">
          <CalendarIcon
            size={20}
            color={colorScheme === "dark" ? colorsStyles["grey"] : "black"}
          />
          <BodyText
            text="28 October 2023"
            customClassName="ml-1.5 text-black dark:text-white/60"
          />
        </View>
        {/* <View className="basis-1/2">
          <StreakCard customClassName="h-full" streak={10} />
        </View>
        <View className="basis-1/2">
          <StreakCard customClassName="h-full" streak={10} />
        </View> */}
      </View>
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
  handleCardTap?: (task: TaskType) => void;
  handleTaskComplete: () => void;
  task: TaskType;
  completedTasksCount?: number;
  customClassName?: string;
};
