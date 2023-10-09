import { useColorScheme } from "nativewind";
import { CheckIcon } from "react-native-heroicons/mini";

import colorsStyles from "../../constants/styles/colors.styles";
import Button from "../common/bouncy-button";

const ComletedButton = (props: { onPress: () => void }) => {
  const { colorScheme } = useColorScheme();

  return (
    <Button
      onPress={() => {
        props.onPress();
      }}
      customClassName="shadow-md w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center"
    >
      <CheckIcon
        size={20}
        color={colorScheme === "dark" ? colorsStyles.white : colorsStyles.black}
      />
    </Button>
  );
};

export default ComletedButton;
