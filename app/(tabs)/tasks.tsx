import { useState } from "react";

import { TaskType } from "../../components/tasks/task-card";
import TaskDetail from "../../components/tasks/task-detail";
import TaskList from "../../components/tasks/task-list";

export default function Tasks() {
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

  return (
    <>
      <TaskList selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
      {selectedTask && (
        <TaskDetail
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />
      )}
    </>
  );
}
