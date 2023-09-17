import {
  Alien,
  Campfire,
  Code,
  FilmStrip,
  Lightbulb,
  YinYang,
} from "phosphor-react-native";
import { useEffect, useState, useContext } from "react";
import { useColorScheme } from "nativewind";
import { SafeAreaView, View } from "react-native";
import { TasksContext } from "../../components/providers/tasks-provider";
import GlobalClasses from "../../constants/styles/global.classes";
import { TaskType } from "../../components/tasks/task-card";
import TasksList from "../../components/tasks/tasks-list";
import TasksStack from "../../components/tasks/tasks-stack";
import PageHeader from "../../components/common/page-header";

export default function Tasks() {
  const { selectedTask, setSelectedTask } = useContext(TasksContext);
  const [selectedView, setSelectedView] = useState<"list" | "stack">("list");
  const [completedTasksCount, setCompletedTasksCount] = useState<number>(0);
  const { colorScheme } = useColorScheme();

  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description:
        "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      completed: false,
      date: "2021-01-01",
      time: "12:00",
      icon: (
        <YinYang
          weight="fill"
          color={colorScheme === "dark" ? "white" : "black"}
          size={25}
        />
      ),
    },
    {
      id: 2,
      title: "Task 2",
      description:
        "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      completed: false,
      date: "2021-01-01",
      time: "12:00",
      icon: (
        <Code
          weight="fill"
          color={colorScheme === "dark" ? "white" : "black"}
          size={25}
        />
      ),
    },
    {
      id: 3,
      title: "Task 3",
      description:
        "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      completed: false,
      date: "2021-01-01",
      time: "12:00",
      icon: (
        <Alien
          weight="fill"
          color={colorScheme === "dark" ? "white" : "black"}
          size={25}
        />
      ),
    },
    {
      id: 4,
      title: "Task 4",
      description:
        "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      completed: false,
      date: "2021-01-01",
      time: "12:00",
      icon: (
        <Campfire
          weight="fill"
          color={colorScheme === "dark" ? "white" : "black"}
          size={25}
        />
      ),
    },
    {
      id: 5,
      title: "Task 5",
      description:
        "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      completed: false,
      date: "2021-01-01",
      time: "12:00",
      icon: (
        <FilmStrip
          weight="fill"
          color={colorScheme === "dark" ? "white" : "black"}
          size={25}
        />
      ),
    },
    {
      id: 6,
      title: "Task 6",
      description:
        "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      completed: false,
      date: "2021-01-01",
      time: "12:00",
      icon: (
        <Lightbulb
          weight="fill"
          color={colorScheme === "dark" ? "white" : "black"}
          size={25}
        />
      ),
    },
  ];

  return (
    <>
      <SafeAreaView />
      <View className={GlobalClasses["light-bg"]}>
        <PageHeader
          type="date"
          selectedView={selectedView}
          setSelectedView={setSelectedView}
          taskLength={tasks.length}
          completedTasksLength={completedTasksCount}
        />
        {selectedView === "stack" ? (
          <TasksStack
            tasks={tasks}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            completedTasksCount={completedTasksCount}
            setCompletedTasksCount={setCompletedTasksCount}
          />
        ) : (
          <TasksList
            tasks={tasks}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            completedTasksCount={completedTasksCount}
            setCompletedTasksCount={setCompletedTasksCount}
          />
        )}
      </View>
    </>
  );
}

export type TasksLayoutProps = {
  tasks: TaskType[];
  selectedTask: TaskType | {};
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskType>>;
  completedTasksCount: number;
  setCompletedTasksCount: React.Dispatch<React.SetStateAction<number>>;
};
