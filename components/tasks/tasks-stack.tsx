import { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useColorScheme } from "nativewind";

import PageHeader from "../common/page-header";
import { HeadingText } from "../common/text";
import TaskCard from "./task-card";
import { TaskType } from "./task-card";
import GlobalClasses from "../../constants/styles/global.classes";
import { TasksLayoutProps } from "../../app/(tabs)/tasks";

export default function TasksStack(props: TasksLayoutProps) {
  const {
    tasks,
    selectedTask,
    setSelectedTask,
    completedTasksCount,
    setCompletedTasksCount,
  } = props;
  const [selectedView, setSelectedView] = useState<"list" | "stack">("list");
  const { colorScheme } = useColorScheme();

  const tasksLength = tasks.length;

  return (
    <View className={`h-full ${GlobalClasses["light-bg"]}`}>
      <HeadingText text="STACK VIEW" />
    </View>
  );
}
