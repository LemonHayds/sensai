import { useColorScheme } from "nativewind";
import { useContext, useState } from "react";
import { View } from "react-native";
import Swiper from "react-native-deck-swiper";

import { TasksLayoutProps } from "../../app/(tabs)/tasks";
import GlobalClasses from "../../constants/styles/global.classes";
import TaskType from "../../types/task.type";
import { TasksContext } from "../providers/tasks-provider";
import TaskCard from "./task-card";

export default function TasksStack(props: TasksLayoutProps) {
  const { completedTasksCount, setCompletedTasksCount } = props;
  const { tasks, selectedTask, setSelectedTask } = useContext(TasksContext);
  const [index, setIndex] = useState<number>(0);

  const { colorScheme } = useColorScheme();

  const onSwiped = (index: number) => {
    setIndex(index + 1);
  };

  return (
    <View className={`${GlobalClasses["light-bg"]}`}>
      {tasks && tasks.length > 0 && (
        <Swiper
          cards={tasks as TaskType[]}
          cardIndex={index}
          onSwiped={onSwiped}
          stackSize={tasks.length}
          stackScale={3}
          stackSeparation={5}
          cardVerticalMargin={20}
          cardHorizontalMargin={0}
          disableTopSwipe={true}
          disableBottomSwipe={true}
          overlayLabels={overlayLabels}
          animateOverlayLabelsOpacity
          backgroundColor="transparent"
          infinite
          onTapCard={() => {}}
          renderCard={(card) => {
            return (
              <TaskCard
                task={card}
                setSelectedTask={setSelectedTask}
                completedTasksCount={completedTasksCount}
                setCompletedTasksCount={setCompletedTasksCount}
                cardType="large"
                customClassName={`${GlobalClasses.border}`}
              />
            );
          }}
        />
      )}
    </View>
  );
}

const overlayLabels = {
  left: {
    title: "Not yet",
    style: {
      label: {
        backgroundColor: "red",
        borderColor: "black",
        color: "white",
        borderWidth: 1,
      },
      wrapper: {
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        marginTop: 30,
        marginLeft: -30,
      },
    },
  },
  right: {
    title: "Complete",
    style: {
      label: {
        backgroundColor: "red",
        borderColor: "black",
        color: "white",
        borderWidth: 1,
      },
      wrapper: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 30,
        marginLeft: 30,
      },
    },
  },
};
