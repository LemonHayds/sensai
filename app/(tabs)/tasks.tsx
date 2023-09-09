import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SwipeableTaskCard from "../../components/common/swipeable-task-card";
import { HeadingText, SubHeadingText } from "../../components/core/text";
import { TaskType } from "../../components/common/swipeable-task-card";
import { useState } from "react";

export default function Tasks() {
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

  return (
    <>
      <SafeAreaView />

      <ScrollView className="bg-light-paper px-4 pb-6">
        <View className="mb-2">
          <HeadingText text="Today" />
          <SubHeadingText text="9th September" />
        </View>

        {TempTasks.map((task) => (
          <SwipeableTaskCard task={task} setSelectedTask={setSelectedTask} />
        ))}
      </ScrollView>
    </>
  );
}

const TempTasks = [
  {
    id: 1,
    title: "Task 1",
    description: "This is a task",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: (
      <MaterialCommunityIcons name="scale-balance" size={24} color="black" />
    ),
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is a task",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: (
      <MaterialCommunityIcons name="scale-balance" size={24} color="black" />
    ),
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is a task",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: (
      <MaterialCommunityIcons name="scale-balance" size={24} color="black" />
    ),
  },
  {
    id: 4,
    title: "Task 4",
    description: "This is a task",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: (
      <MaterialCommunityIcons name="scale-balance" size={24} color="black" />
    ),
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
