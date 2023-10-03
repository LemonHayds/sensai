import { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native";

import GlobalClasses from "../../../constants/styles/global.classes";
import { FormItemType } from "../../../types/form-item.type";

const ColorPicker = (
  props: FormItemType & {
    onChange: (value: any) => void;
    customClassName?: string;
  }
) => {
  const [selectedColor, setSelectedColor] = useState(props.value);

  return <View className={props.customClassName}></View>;
};

export default ColorPicker;
