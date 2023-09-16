import { TouchableWithoutFeedback, View, Text } from "react-native";
import {
  ListBulletIcon,
  RectangleStackIcon,
} from "react-native-heroicons/outline";
import { useColorScheme } from "nativewind";
import GlobalClasses from "../../constants/styles/global.classes";

export const ViewSwitcher = (props: ViewSwitcherProps) => {
  const { selectedView, setSelectedView, customClassName } = props;
  const { colorScheme } = useColorScheme();

  return (
    <View
      className={`flex-row justify-center items-center mr-2 ${customClassName}`}
    >
      <TouchableWithoutFeedback onPress={() => setSelectedView("stack")}>
        <View
          className={`mx-6 flex-col space-y-2 justify-center items-center ${
            selectedView === "stack" ? "opacity-100" : "opacity-30"
          }`}
        >
          <RectangleStackIcon
            color={colorScheme === "dark" ? "white" : "black"}
            size={24}
          />
          <View
            className={`w-[3px] h-[3px] rounded-full ${
              selectedView === "stack" ? "opactity-100" : "opacity-0"
            }
            ${GlobalClasses["general-color"]}`}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setSelectedView("list")}>
        <View
          className={`mx-6 flex-col space-y-2 justify-center items-center ${
            selectedView === "list" ? "opacity-100" : "opacity-30"
          }`}
        >
          <ListBulletIcon
            color={colorScheme === "dark" ? "white" : "black"}
            size={24}
          />
          <View
            className={`w-[3px] h-[3px] rounded-full 
            ${selectedView === "list" ? "opactity-100" : "opacity-0"}
            ${GlobalClasses["general-color"]}
            `}
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
