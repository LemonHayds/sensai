interface TaskType {
  color?: string;
  completed: boolean;
  date: string;
  description: string;
  icon: string;
  id: number;
  time: string;
  title: string;
  [key: string]: any; // Add an index signature that allows for string indexing
}

export default TaskType;
