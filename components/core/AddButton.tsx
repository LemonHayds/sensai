import { useState, useRef, useEffect } from "react";
import { View, TouchableWithoutFeedback, Animated } from "react-native";
import { PlusIcon, PencilIcon, EyeIcon } from "react-native-heroicons/solid";

type AddButtonProps = {
  opened: boolean;
  setOpened: (opened: boolean) => void;
};

const AddButton = (props: AddButtonProps) => {
  const { opened, setOpened } = props;

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [opened, animation]);

  const opacity = {
    opacity: animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    }),
  };

  return (
    <View>
      <TouchableWithoutFeedback>
        <Animated.View
          style={{
            ...opacity,
            ...transformAnimation(animation, "left"),
          }}
        >
          <View className="absolute left-[4px] top-[4px] w-[50px] h-[50px] bg-light-red rounded-[100px] justify-center items-center mb-0">
            <PencilIcon color={"white"} size={20} />
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View
          style={{
            ...opacity,
            ...transformAnimation(animation, "right"),
          }}
        >
          <View className="absolute right-[4px] top-[4px] w-[50px] h-[50px] bg-light-red rounded-[100px] justify-center items-center mb-0">
            <EyeIcon color={"white"} size={20} />
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setOpened(!opened)}>
        <Animated.View
          style={{
            transform: [
              {
                rotate: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "45deg"],
                }),
              },
            ],
          }}
        >
          <View className="w-[55px] h-[55px] bg-light-red rounded-[100px] justify-center items-center mb-0">
            <PlusIcon color={"white"} size={26} />
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AddButton;

const transformAnimation = (
  animation: Animated.Value,
  direction: "left" | "right"
) => {
  const style = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, direction === "left" ? -50 : 50],
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -50],
        }),
      },
    ],
  };

  return style;
};
