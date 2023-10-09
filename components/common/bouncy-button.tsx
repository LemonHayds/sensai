import { useState } from "react";
import { Animated, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import GlobalClasses from "../../constants/styles/global.classes";

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  customClassName?: string;
};

const Button = (props: ButtonProps) => {
  let springSize = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(springSize, {
      toValue: 0.4,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(springSize, {
      toValue: 1,
      friction: 4,
      tension: 20,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: springSize }],
  };

  return (
    <TouchableWithoutFeedback
      onPress={props.onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={animatedStyle}
        className={`border ${GlobalClasses.border} ${GlobalClasses.bg} ${props.customClassName}`}
      >
        {props.children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
