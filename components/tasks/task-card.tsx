import { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Card } from "../common/card";
import { BodyText, HeadingText } from "../common/text";
import GlassContainer from "../common/glass-container";
import BorderedButton from "../common/bordered-button";
import { CheckIcon } from "react-native-heroicons/mini";

export const TaskCard = (props: TaskCardProps) => {
  const TaskCardClassNames = "bg-paper min-h-[200px] px-4 py-4";
  const { task, setSelectedTask, customClassName } = props;
  const [complete, setComplete] = useState(false);

  const handleTaskComplete = () => {
    setComplete(!complete);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelectedTask(task);
      }}
    >
      <View>
        <Card
          customClassName={`border-[1px] ${
            complete ? "border-black/30 shadow-sm" : "border-white/90"
          } ${TaskCardClassNames} ${customClassName}`}
        >
          <View className="flex-1 flex-col">
            <View className="flex-row justify-between">
              <View className="flex-row items-center">
                <GlassContainer customClassName="mr-3 w-[40px] h-[40px]">
                  <View className="flex-row items-center opacity-100">
                    {task.icon}
                  </View>
                </GlassContainer>
                <View className="flex-col justify-start items-start">
                  <HeadingText
                    text={task.title}
                    customClassName="text-[16px]"
                  />
                  <BodyText text={`${task.time} pm`} />
                </View>
              </View>

              <View>
                <BorderedButton
                  onPress={() => handleTaskComplete()}
                  parentColor="bg-paper"
                >
                  <CheckIcon color={"white"} size={15} />
                </BorderedButton>
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

export default TaskCard;

type TaskCardProps = {
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
