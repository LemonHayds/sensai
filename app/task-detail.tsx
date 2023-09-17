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
import GlobalClasses from "../constants/styles/global.classes";
import { useColorScheme } from "nativewind";
import { TasksContext } from "../components/providers/tasks-provider";
import { useContext } from "react";

export default function TaskDetail(props: TaskDetailProps) {
  const { selectedTask, setSelectedTask } = useContext(TasksContext);
  const { colorScheme } = useColorScheme();
  const router = useRouter();

  const handleClose = () => {
    router.back();
    setSelectedTask({});
  };

  const task = selectedTask as TaskType;

  return (
    <SafeAreaView className={`flex-1 ${GlobalClasses.bg}`}>
      <View>
        <View className="flex-row px-4 py-2 flex justify-between mb-2">
          <Animated.View sharedTransitionTag={`task.icon`}>
            <GlassContainer customClassName="mr-3 w-[40px] h-[40px]">
              <View className="flex-row items-center">
                <YinYang
                  color={colorScheme === "dark" ? "white" : "black"}
                  weight="fill"
                />
              </View>
            </GlassContainer>
          </Animated.View>
          <BorderedButton
            onPress={handleClose}
            customClassName="w-[35px] h-[35px]"
            transparentButton={true}
            filledBorder={true}
            parentColor={GlobalClasses.bg}
          >
            <XMarkIcon color={colorScheme === "dark" ? "white" : "black"} />
          </BorderedButton>
        </View>
        {selectedTask && (
          <View className="px-4">
            <View>
              <HeadingText text={task.title} customClassName="text-4xl mb-2" />
            </View>
            <View className="text-xl">
              <BodyText
                text={task.description}
                additionalStyles={{ fontSize: 16, lineHeight: 20 }}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

type TaskDetailProps = {
  selectedTask: TaskType | {};
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
};
