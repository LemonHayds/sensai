import { useState } from "react";

import { TaskType } from "../../components/tasks/task-card";
import TaskList from "../../components/tasks/task-list";

export default function Tasks() {
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

  return (
    <>
      <TaskList selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
    </>
  );
}
