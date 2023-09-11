import { useEffect, useRef, useState } from "react";
import { View } from "react-native";

const TaskHeaderIndicator = (props: TaskHeaderIndicatorProps) => {
  const { tasksLength, completedTasksLength } = props;

  const indicatorRef = useRef(null);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  useEffect(() => {
    if (tasksLength && completedTasksLength) {
      if (completedTasksLength === 0) return setIndicatorWidth(0);

      const newIndicatorWidth = (completedTasksLength / tasksLength) * 100;
      setIndicatorWidth(newIndicatorWidth);
    }
  }, [tasksLength, completedTasksLength]);

  return (
    <View
      ref={indicatorRef}
      style={{ width: completedTasksLength === 0 ? 0 : `${indicatorWidth}%` }}
      className="bg-light-red absolute bottom-[-1px] left-0 h-[3px]"
    ></View>
  );
};

export default TaskHeaderIndicator;

type TaskHeaderIndicatorProps = {
  tasksLength?: number;
  completedTasksLength?: number;
};
