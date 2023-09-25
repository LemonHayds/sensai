import { useColorScheme } from "nativewind";
import { XMarkIcon } from "react-native-heroicons/mini";

import colorsStyles from "../../constants/styles/colors.styles";
import Button from "../common/button";

const IncompleteButton = (props: { onPress: () => void }) => {
  const { colorScheme } = useColorScheme();

  return (
    <Button
      onPress={() => {
        props.onPress();
      }}
      customClassName="shadow-md w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center"
    >
      <XMarkIcon
        size={20}
        color={colorScheme === "dark" ? colorsStyles.white : colorsStyles.black}
      />
    </Button>
  );
};

export default IncompleteButton;
