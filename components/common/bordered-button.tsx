import { useState } from "react";
import { View, TouchableOpacity } from "react-native";

const BorderedButton = (props: BorderedButtonProps) => {
  const { parentColor, onPress, children, customClassName } = props;
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        className={`rounded-lg relative flex items-center justify-center border-[1px] ${
          pressed ? "border-black/60" : "border-black/40"
        } ${customClassName}`}
        onPress={() => {
          setPressed(!pressed);
          onPress();
        }}
      >
        <View
          className={`rounded-md p-[8px] m-[5px] ${
            pressed ? "bg-black" : "bg-black/50"
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
  customClassName?: string;
};
