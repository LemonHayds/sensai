import { Alien, Campfire, Code, YinYang } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { XMarkIcon } from "react-native-heroicons/solid";

import { HeadingText } from "../../components/common/text";
import SwipeableTaskCard from "../../components/tasks/swipeable-task-card";
import { TaskType } from "../../components/tasks/swipeable-task-card";

export default function Tasks() {
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

  return (
    <>
      <SafeAreaView />
      <View className="bg-light-paper">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[{ id: "heading" }, ...TempTasks]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            item.id === "heading" ? (
              <View className="mx-4 mt-2">
                <HeadingText text="Today" />
                <HeadingText text="9th September" />
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
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
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

const TempTasks = [
  {
    id: 1,
    title: "Meditate",
    description:
      "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: <YinYang weight="fill" size={25} />,
  },
  {
    id: 2,
    title: "Learn NextJS",
    description:
      "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: <Code weight="fill" size={25} />,
  },
  {
    id: 3,
    title: "Practive React Native",
    description:
      "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: <Alien weight="fill" size={25} />,
  },
  {
    id: 4,
    title: "Task 4",
    description:
      "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: <Campfire weight="fill" size={25} />,
  },
];
