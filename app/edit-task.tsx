import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import { useContext } from "react";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";
import { CheckIcon, ChevronDoubleDownIcon } from "react-native-heroicons/solid";

import BorderedButton from "../components/common/bordered-button";
import GlassContainer from "../components/common/glass-container";
import { BodyText, HeadingText } from "../components/common/text";
import { TasksContext } from "../components/providers/tasks-provider";
import { taskConfig } from "../constants/configs/task.config";
import { FormTypesParser } from "../constants/parsers/form-types.parser";
import GlobalClasses from "../constants/styles/global.classes";
import { FormItemType } from "../types/form-item.type";
import TaskType from "../types/task.type";

export default function EditTask(props: EditTaskProps) {
  const { selectedTask, setSelectedTask } = useContext(TasksContext);
  const { colorScheme } = useColorScheme();
  const router = useRouter();

  const task = selectedTask as TaskType;

  const [formState, setFormState] = useState(task);

  const handleBack = () => {
    router.back();
  };

  const handleEditTask = (key: string, value: any) => {
    setFormState({ ...formState, [key]: value });
  };

  return (
    <SafeAreaView
      className={`flex-1 ${GlobalClasses.bg} mt-[120px] shadow-lg border-t ${GlobalClasses.border}`}
    >
      <View className="relative px-4 py-4">
        <View className="flex-row flex justify-between mb-4">
          <View className="flex flex-row items-center justify-between w-full">
            <BorderedButton
              onPress={handleBack}
              customClassName="w-[35px] h-[35px]"
              transparentButton={true}
              filledBorder={true}
              parentColor={GlobalClasses.bg}
            >
              <ChevronDoubleDownIcon
                color={colorScheme === "dark" ? "white" : "black"}
                size={18}
              />
            </BorderedButton>
            <BorderedButton
              onPress={handleBack}
              customClassName="w-[35px] h-[35px]"
              transparentButton={true}
              filledBorder={true}
              parentColor={GlobalClasses.bg}
            >
              <CheckIcon
                color={colorScheme === "dark" ? "white" : "black"}
                size={18}
              />
            </BorderedButton>
          </View>
        </View>
        <View className="h-full">
          <FlatList
            data={taskConfig}
            keyExtractor={(item: FormItemType) => item.key}
            renderItem={({ item }) => (
              <FormTypesParser
                key={item.key}
                itemKey={item.key}
                type={item.type}
                label={item.label}
                value={formState[item.key]}
                onChange={(value: any) => {
                  handleEditTask(item.key, value);
                }}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 35 }} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

type EditTaskProps = {
  tasks: TaskType[] | [];
  selectedTask: TaskType | {};
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
};
