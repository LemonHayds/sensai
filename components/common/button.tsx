import { TouchableOpacity, View } from "react-native";
import GlobalClasses from "../../constants/styles/global.classes";

const Button = (props: {
  children: React.ReactNode;
  onPress: () => void;
  customClassName?: string;
}) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View
        className={`rounded-md p-3 border ${GlobalClasses.border} ${GlobalClasses.bg} ${props.customClassName}`}
      >
        {props.children}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
