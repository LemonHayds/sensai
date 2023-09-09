import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import SwipeableTaskCard from "../../components/common/swipeable-task-card";
import { HeadingText, SubHeadingText } from "../../components/core/text";
import { TaskType } from "../../components/common/swipeable-task-card";
import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { XMarkIcon } from "react-native-heroicons/solid";
import { Alien, Campfire, Code, YinYang } from "phosphor-react-native";

export default function Tasks() {
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  const taskData = TempTasks;
  return (
    <>
      <SafeAreaView />
      <View className="bg-light-paper px-4 pb-6">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[{ id: "heading" }, ...taskData]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            item.id === "heading" ? (
              <View className="mb-2">
                <HeadingText text={"Today"} />
                <SubHeadingText text="9th September" />
              </View>
            ) : (
              <View key={item.id}>
                <SwipeableTaskCard
                  task={item as TaskType}
                  setSelectedTask={setSelectedTask}
                />
              </View>
            )
          }
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </View>
      {selectedTask && (
        <View className="absolute top-0 bg-paper w-full h-full">
          <View className="flex-row items-center p-2 justify-between">
            <HeadingText text={selectedTask?.title} />
            <TouchableWithoutFeedback
              className="bg-white w-[25px] h-[25px] rounded-full flex-row items-center justify-center"
              onPress={() => setSelectedTask(null)}
            >
              <XMarkIcon color="black" />
            </TouchableWithoutFeedback>
          </View>
        </View>
      )}
    </>
  );
}

type HeadingTextType = {
  id: string;
  text: string;
};

const TempTasks = [
  {
    id: 1,
    title: "Meditate",
    description: "This is a task",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: <YinYang weight="fill" size={33} />,
  },
  {
    id: 2,
    title: "Learn NextJS",
    description: "This is a task",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: <Code weight="fill" size={33} />,
  },
  {
    id: 3,
    title: "Practive React Native",
    description: "This is a task",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: <Alien weight="fill" size={33} />,
  },
  {
    id: 4,
    title: "Task 4",
    description: "This is a task",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: <Campfire weight="fill" size={33} />,
  },
];
