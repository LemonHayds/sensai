import { FlatList, SafeAreaView, View } from "react-native";

import { TasksLayoutProps } from "../../app/(tabs)/tasks";
import GlobalClasses from "../../constants/styles/global.classes";
import TaskCard from "./task-card";
import TaskType from "../../types/task.type";

export default function TasksList(props: TasksLayoutProps) {
  const {
    handleCardTap,
    tasks,
    selectedTask,
    setSelectedTask,
    completedTasksCount,
    setCompletedTasksCount,
  } = props;

  return (
    <>
      <FlatList
        className="pt-4 h-full"
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View key={item.id}>
            <TaskCard
              task={item as TaskType}
              setSelectedTask={setSelectedTask}
              customClassName={item.id === tasks.length ? "mb-[200px]" : ""}
              completedTasksCount={completedTasksCount}
              setCompletedTasksCount={setCompletedTasksCount}
              handleCardTap={() => handleCardTap(item as TaskType)}
            />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </>
  );
}
