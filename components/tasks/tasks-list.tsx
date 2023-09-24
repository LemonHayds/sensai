import { FlatList, SafeAreaView, View } from "react-native";
import TaskCard from "./task-card";
import { TaskType } from "./task-card";
import GlobalClasses from "../../constants/styles/global.classes";
import { TasksLayoutProps } from "../../app/(tabs)/tasks";

export default function TasksList(props: TasksLayoutProps) {
  const {
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
            />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </>
  );
}
