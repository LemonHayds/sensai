import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { measure } from "react-native-reanimated";

import PageHeader from "../../components/common/page-header";
import { TasksContext } from "../../components/providers/tasks-provider";
import TasksList from "../../components/tasks/tasks-list";
import TasksStack from "../../components/tasks/tasks-stack";
import GlobalClasses from "../../constants/styles/global.classes";
import TaskType from "../../types/task.type";

export default function Tasks() {
  const { tasks, selectedTask, setSelectedTask } = useContext(TasksContext);
  const [selectedView, setSelectedView] = useState<"list" | "stack">("list");
  const [completedTasksCount, setCompletedTasksCount] = useState<number>(0);
  const router = useRouter();

  let currentTasks: TaskType[] = [];
  if (tasks) {
    currentTasks = tasks as TaskType[];
  }

  const [modal, setModal] = useState({ modal: null });

  const openTaskModal = (position: any) => {
    //@ts-ignore
    setModal({ icon: selectedTask.icon, position });
  };

  const closeTaskModal = () => {
    setModal({ modal: null });
  };

  const handleCardTap = (task: any) => {};

  // OLD
  // const handleCardTap = (task: any) => {
  //   setSelectedTask(task);
  //   router.push("/task-detail");
  // };

  return (
    <View className={`flex-1 ${GlobalClasses["light-bg"]}`}>
      <PageHeader
        type="date"
        selectedView={selectedView}
        setSelectedView={setSelectedView}
        taskLength={tasks ? tasks.length : 0}
        completedTasksLength={completedTasksCount}
      />
      {selectedView === "stack" ? (
        <TasksStack
          tasks={currentTasks}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          completedTasksCount={completedTasksCount}
          setCompletedTasksCount={setCompletedTasksCount}
          handleCardTap={handleCardTap}
        />
      ) : (
        <TasksList
          tasks={currentTasks}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          completedTasksCount={completedTasksCount}
          setCompletedTasksCount={setCompletedTasksCount}
          handleCardTap={handleCardTap}
        />
      )}
      {}
    </View>
  );
}

export type TasksLayoutProps = {
  tasks: TaskType[] | [];
  selectedTask: TaskType | {};
  setSelectedTask: (task: TaskType | {}) => void;
  completedTasksCount: number;
  handleCardTap: (task: TaskType) => void;
  setCompletedTasksCount: React.Dispatch<React.SetStateAction<number>>;
};
