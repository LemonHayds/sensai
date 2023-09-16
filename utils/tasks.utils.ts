import { updateData, storeData, getData } from "./store.utils";
import { generateTimeBasedId } from "./common.utils";
import TaskType from "../types/task.type";

const STORAGE_KEY = "tasks";

export const intiateTasks = async () => {
  await storeData(STORAGE_KEY, []);
};

export const getAllTasks = async () => {
  const tasks = await getData(STORAGE_KEY);
  return tasks;
};

export const storeTask = async (task: TaskType) => {
  task.id = generateTimeBasedId();
  const tasks = await getData(STORAGE_KEY);
  const newTasks = [...tasks, task];
  await updateData(STORAGE_KEY, newTasks);
};

export const deleteTask = async (id: string) => {
  const tasks = await getData(STORAGE_KEY);
  const newTasks = tasks.filter((task: TaskType) => task.id !== id);
  await updateData(STORAGE_KEY, newTasks);
};

export const getSpecificTask = async (id: string) => {
  const tasks = await getData(STORAGE_KEY);
  const task = tasks.find((task: TaskType) => task.id === id);
  return task;
};

export const updateTask = async (task: TaskType) => {
  const tasks = await getData(STORAGE_KEY);
  const newTasks = tasks.filter((t: TaskType) => t.id !== task.id);
  newTasks.push(task);
  await updateData(STORAGE_KEY, newTasks);
};
