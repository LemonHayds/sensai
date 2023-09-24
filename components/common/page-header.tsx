import { useState } from "react";
import { View } from "react-native";

import GlobalClasses from "../../constants/styles/global.classes";
import TaskHeaderIndicator from "../tasks/task-header-indicator";
import ViewSwitcher from "../tasks/view-switcher";
import SensaiTextContainer from "./sensai-text-container";
import { HeadingText, SensaiText } from "./text";

type PageHeaderProps = {
  type: "welcome" | "date";
  user?: any;
  profileSize?: number;
  selectedView: "list" | "stack";
  taskLength?: number;
  completedTasksLength?: number;
  setSelectedView: (view: "list" | "stack") => void;
};

export default function PageHeader(props: PageHeaderProps) {
  const {
    type = "welcome",
    user,
    taskLength,
    completedTasksLength,
    profileSize = 40,
    setSelectedView,
    selectedView,
  } = props;

  switch (type) {
    case "welcome":
      return (
        <View>
          <HeadingText text="`Good Morning`" />
        </View>
      );
    case "date":
      const formattedDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      });

      return (
        <View
          className={`relative flex-col gap-4 shadow-sm pb-3 border-b ${GlobalClasses.border} ${GlobalClasses.bg}`}
        >
          <View className="flex-row items-center justify-between px-4">
            <View>
              <HeadingText
                text={`Today`}
                customClassName="text-3xl font-bold"
              />
            </View>
            <SensaiTextContainer customClassName="mt-1">
              <SensaiText
                text={formattedDate.toString()}
                customClassName="w-fit text-xl text-white dark:text-white"
              />
            </SensaiTextContainer>
          </View>
          <View className="flex-col justify-center items-center">
            <ViewSwitcher
              selectedView={selectedView}
              setSelectedView={setSelectedView}
            />
          </View>
          <TaskHeaderIndicator
            tasksLength={taskLength}
            completedTasksLength={completedTasksLength}
          />
        </View>
      );
  }
}
