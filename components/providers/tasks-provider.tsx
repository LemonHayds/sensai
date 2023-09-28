import {
  Alien,
  Campfire,
  Code,
  FilmStrip,
  Lightbulb,
  YinYang,
} from "phosphor-react-native";
import { createContext, useState, useEffect, ReactNode } from "react";
import TaskType from "../../types/task.type";
import { useColorScheme } from "nativewind";

type TasksContextType = {
  tasks?: TaskType[] | [];
  selectedTask: TaskType | {};
  setSelectedTask: (task: TaskType | {}) => void;
};

const defaultValue: TasksContextType = {
  tasks: [],
  selectedTask: {},
  setSelectedTask: (task) => {},
};

const TasksContext = createContext(defaultValue);

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTask, setSelectedTask] = useState<TaskType | {}>(
    defaultValue.selectedTask
  );
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
      icon: "yin-yang",
    },
    {
      id: 2,
      title: "Task 2",
      description:
        "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      completed: false,
      date: "2021-01-01",
      time: "12:00",
      icon: "code",
    },
    {
      id: 3,
      title: "Task 3",
      description:
        "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      completed: false,
      date: "2021-01-01",
      time: "12:00",
      icon: "alien",
    },
    {
      id: 4,
      title: "Task 4",
      description:
        "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      completed: false,
      date: "2021-01-01",
      time: "12:00",
      icon: "campfire",
    },
    {
      id: 5,
      title: "Task 5",
      description:
        "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      completed: false,
      date: "2021-01-01",
      time: "12:00",
      icon: "film-strip",
    },
    {
      id: 6,
      title: "Task 6",
      description:
        "Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorum Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      completed: false,
      date: "2021-01-01",
      time: "12:00",
      icon: "lightbulb",
    },
  ];

  const contextValue: TasksContextType = {
    tasks,
    selectedTask,
    setSelectedTask,
  };

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
