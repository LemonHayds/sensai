import { TouchableWithoutFeedback, View, Text } from "react-native";
import { HeadingText } from "../common/text";
import {
  ListBulletIcon,
  RectangleStackIcon,
} from "react-native-heroicons/outline";

export const ViewSwitcher = (props: ViewSwitcherProps) => {
  const { selectedView, setSelectedView, customClassName } = props;

  return (
    <View
      className={`flex-row justify-center items-center mr-2 ${customClassName}`}
    >
      <TouchableWithoutFeedback onPress={() => setSelectedView("stack")}>
        <View
          className={`mr-5 ${
            selectedView === "stack" ? "opacity-100" : "opacity-30"
          }`}
        >
          <RectangleStackIcon color={"black"} size={22} />
        </View>
      </TouchableWithoutFeedback>
      <View className="border-[0.5px] h-full border-black" />
      <TouchableWithoutFeedback onPress={() => setSelectedView("list")}>
        <View
          className={`ml-5 ${
            selectedView === "list" ? "opacity-100" : "opacity-30"
          }`}
        >
          <ListBulletIcon color={"black"} size={22} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ViewSwitcher;

type ViewSwitcherProps = {
  selectedView: "list" | "stack";
  setSelectedView: (view: "list" | "stack") => void;
  customClassName?: string;
};
