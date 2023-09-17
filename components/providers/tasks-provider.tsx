import { createContext, useState, useEffect, ReactNode } from "react";
import TaskType from "../../types/task.type";

type TasksContextType = {
  selectedTask: TaskType | {};
  setSelectedTask: (task: TaskType | {}) => void;
};

const defaultValue: TasksContextType = {
  selectedTask: {},
  setSelectedTask: (task) => {},
};

const TasksContext = createContext(defaultValue);

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTask, setSelectedTask] = useState<TaskType | {}>(
    defaultValue.selectedTask
  );

  const contextValue: TasksContextType = {
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
