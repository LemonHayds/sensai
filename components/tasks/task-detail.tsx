import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { XMarkIcon } from "react-native-heroicons/solid";

import BorderedButton from "../common/bordered-button";
import { BodyText, HeadingText } from "../common/text";
import { TaskType } from "./task-card";

export default function TaskDetail(props: TaskDetailProps) {
  const { selectedTask, setSelectedTask } = props;

  const handleClose = () => {
    setSelectedTask(null);
  };

  return (
    <View className="absolute top-0 bg-paper w-full h-full">
      <View className="relative">
        <View className="flex-row p-2 flex justify-between">
          <HeadingText text={selectedTask?.title} customClassName="text-4xl" />
          <BorderedButton
            onPress={handleClose}
            customClassName="w-[35px] h-[35px]"
            transparentButton={true}
            filledBorder={true}
          >
            <XMarkIcon color={"black"} className="text-black/60 bg-paper" />
          </BorderedButton>
        </View>
        <View className="px-3 text-xl">
          <BodyText
            text={selectedTask?.description}
            additionalStyles={{ fontSize: 16, lineHeight: 20 }}
          />
        </View>
      </View>
    </View>
  );
}

type TaskDetailProps = {
  selectedTask: TaskType | null;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
};
