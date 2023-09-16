import { TouchableWithoutFeedback, View, Text } from "react-native";
import {
  ListBulletIcon,
  RectangleStackIcon,
} from "react-native-heroicons/outline";
import { useColorScheme } from "nativewind";

export const ViewSwitcher = (props: ViewSwitcherProps) => {
  const { selectedView, setSelectedView, customClassName } = props;
  const { colorScheme } = useColorScheme();

  return (
    <View
      className={`flex-row justify-center items-center mr-2 ${customClassName}`}
    >
      <TouchableWithoutFeedback onPress={() => setSelectedView("stack")}>
        <View
          className={`mx-6 ${
            selectedView === "stack" ? "opacity-100" : "opacity-30"
          }`}
        >
          <RectangleStackIcon
            color={colorScheme === "dark" ? "white" : "black"}
            size={24}
          />
        </View>
      </TouchableWithoutFeedback>
      <View className="border-[0.5px] h-full border-black" />
      <TouchableWithoutFeedback onPress={() => setSelectedView("list")}>
        <View
          className={`mx-6 ${
            selectedView === "list" ? "opacity-100" : "opacity-30"
          }`}
        >
          <ListBulletIcon
            color={colorScheme === "dark" ? "white" : "black"}
            size={24}
          />
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
