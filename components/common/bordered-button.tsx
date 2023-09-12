import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

const BorderedButton = (props: BorderedButtonProps) => {
  const {
    parentColor = "bg-paper",
    onPress,
    children,
    customClassName,
    filledBorder = false,
    transparentButton = false,
  } = props;
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        className={`rounded-lg relative flex items-center justify-center border-[1px] ${
          filledBorder
            ? "border-black"
            : pressed
            ? "border-black/60"
            : "border-black/40"
        } ${customClassName}`}
        onPress={() => {
          setPressed(!pressed);
          onPress();
        }}
      >
        <View
          className={`rounded-md p-[8px] m-[5px] ${
            transparentButton ? "" : pressed ? "bg-black" : "bg-black/50"
          }`}
        >
          {children}
        </View>
        <View
          className={`absolute left-[-1px] w-[2px] h-[45%] z-[1] ${parentColor}`}
        />
        <View
          className={`absolute right-[-1px] w-[2px] h-[45%] z-[1] ${parentColor}`}
        />
        <View
          className={`absolute bottom-[-1px] w-[45%] h-[2px] z-[1] ${parentColor}`}
        />
        <View
          className={`absolute top-[-1px] w-[45%] h-[2px] z-[1] ${parentColor}`}
        />
      </TouchableOpacity>
    </>
  );
};

export default BorderedButton;

type BorderedButtonProps = {
  parentColor?: string;
  onPress: () => void;
  children: React.ReactNode;
  transparentButton?: boolean;
  filledBorder?: boolean;
  customClassName?: string;
};
