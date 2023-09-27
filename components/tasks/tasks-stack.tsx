import { useColorScheme } from "nativewind";
import { useContext, useRef, useState } from "react";
import { createRef } from "react";
import { SafeAreaView, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { measure } from "react-native-reanimated";

import { TasksLayoutProps } from "../../app/(tabs)/tasks";
import GlobalClasses from "../../constants/styles/global.classes";
import TaskType from "../../types/task.type";
import { SensaiText } from "../common/text";
import { TasksContext } from "../providers/tasks-provider";
import ComletedButton from "./completed-button";
import IncompleteButton from "./incomplete-button";
import TaskCard from "./task-card";

export default function TasksStack(props: TasksLayoutProps) {
  const { handleCardTap, completedTasksCount, setCompletedTasksCount } = props;
  const { tasks, selectedTask, setSelectedTask } = useContext(TasksContext);
  const [index, setIndex] = useState<number>(0);

  const { colorScheme } = useColorScheme();

  const onSwiped = (index: number) => {
    setIndex(index + 1);
  };

  const swiperRef = useRef(null);

  return (
    <SafeAreaView>
      <View className={`flex flex-col ${GlobalClasses["light-bg"]}`}>
        <View className="h-[56.5%]">
          {tasks && tasks.length > 0 && (
            <Swiper
              ref={swiperRef}
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
              onTapCard={() => handleCardTap(tasks[index])}
              renderCard={(card, index) => {
                return (
                  <TaskCard
                    task={card}
                    setSelectedTask={setSelectedTask}
                    completedTasksCount={completedTasksCount}
                    setCompletedTasksCount={setCompletedTasksCount}
                    cardType="large"
                    customClassName={`${GlobalClasses.border} h-fit`}
                  />
                );
              }}
            />
          )}
        </View>
        <View className="basis-1/2">
          <View className="flex flex-row space-x-16 items-center justify-center">
            <View>
              <IncompleteButton
                onPress={() => {
                  //@ts-ignore
                  swiperRef?.current.swipeLeft();
                }}
              />
            </View>
            <View>
              <ComletedButton
                onPress={() => {
                  //@ts-ignore
                  swiperRef?.current.swipeRight();
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
