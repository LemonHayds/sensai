import {
  Alien,
  Campfire,
  Code,
  FilmStrip,
  Lightbulb,
  YinYang,
} from "phosphor-react-native";
import { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";

import PageHeader from "../../components/common/page-header";
import { HeadingText } from "../../components/common/text";
import TaskCard from "../../components/tasks/task-card";
import { TaskType } from "../../components/tasks/task-card";
import { Link } from "expo-router";

export default function TaskList(props: TaskListProps) {
  const { selectedTask, setSelectedTask } = props;
  const [selectedView, setSelectedView] = useState<"list" | "stack">("list");

  const [completedTasksCount, setCompletedTasksCount] = useState<number>(0);

  const tasksLength = TempTasks.length;

  return (
    <>
      <SafeAreaView />
      <View className="bg-light-paper">
        <PageHeader
          type="date"
          selectedView={selectedView}
          setSelectedView={setSelectedView}
          taskLength={tasksLength}
          completedTasksLength={completedTasksCount}
        />
        {selectedView === "list" ? (
          <FlatList
            className="pt-4 h-full"
            showsVerticalScrollIndicator={false}
            data={TempTasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View key={item.id}>
                <TaskCard
                  task={item as TaskType}
                  setSelectedTask={setSelectedTask}
                  customClassName={
                    item.id === TempTasks.length ? "mb-[200px]" : ""
                  }
                  completedTasksCount={completedTasksCount}
                  setCompletedTasksCount={setCompletedTasksCount}
                />
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          />
        ) : (
          <HeadingText text="Stack View" />
        )}
      </View>
    </>
  );
}

type TaskListProps = {
  selectedTask: TaskType | null;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
};

const TempTasks = [
  {
    id: 1,
    title: "Task 1",
    description:
      "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: <YinYang weight="fill" size={25} />,
  },
  {
    id: 2,
    title: "Task 2",
    description:
      "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: <Code weight="fill" size={25} />,
  },
  {
    id: 3,
    title: "Task 3",
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
  {
    id: 5,
    title: "Task 5",
    description:
      "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: <FilmStrip weight="fill" size={25} />,
  },
  {
    id: 6,
    title: "Task 6",
    description:
      "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    completed: false,
    date: "2021-01-01",
    time: "12:00",
    icon: <Lightbulb weight="fill" size={25} />,
  },
];
