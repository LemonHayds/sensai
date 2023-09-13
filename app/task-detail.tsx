import { View } from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import { YinYang } from "phosphor-react-native";
import BorderedButton from "../components/common/bordered-button";
import { BodyText, HeadingText } from "../components/common/text";
import { TaskType } from "../components/tasks/task-card";
import { SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import GlassContainer from "../components/common/glass-container";
import Animated from "react-native-reanimated";

export default function TaskDetail(props: TaskDetailProps) {
  const { selectedTask, setSelectedTask } = props;

  const router = useRouter();

  const handleClose = () => {
    router.back();
    // setSelectedTask(null);
  };

  return (
    <SafeAreaView className="bg-paper flex-1">
      <View className="flex-row p-2 flex justify-between">
        <Animated.View sharedTransitionTag={`task.icon`}>
          <GlassContainer customClassName="mr-3 w-[40px] h-[40px]">
            <View className="flex-row items-center">
              <YinYang color="black" weight="fill" />
            </View>
          </GlassContainer>
        </Animated.View>

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
    </SafeAreaView>
  );
}

type TaskDetailProps = {
  selectedTask: TaskType | null;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
};
