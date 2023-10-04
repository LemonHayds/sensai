import { useState } from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import colorsStyles from "../../constants/styles/colors.styles";
import { FormItemType } from "../../types/form-item.type";

const getIcons = () => {
  const colors = Object.keys(colorsStyles)
    .filter((key) => key.startsWith("icon"))
    //@ts-ignore
    .map((key) => ({ key, value: colorsStyles[key] }));
  return colors;
};

const IconPicker = (
  props: FormItemType & {
    onChange: (value: any) => void;
    customClassName?: string;
  }
) => {
  const colors = getIcons();

  const [selectedColor, setSelectedColor] = useState(props.value);

  const handleColorChange = (key: string) => {
    setSelectedColor(key);
    props.onChange(key);
  };

  return (
    <View className={`${props.customClassName}`}>
      <View className="flex flex-row w-full items-center flex-wrap gap-1">
        {colors.map((color, index) => {
          return (
            <View key={color.key}>
              <ColorPickerItem
                key={index}
                color={color.value}
                onPress={() => {
                  handleColorChange(color.key);
                }}
                customClassName={
                  selectedColor === color.key
                    ? `border-[2px] border-black/80 dark:border-white/80`
                    : ""
                }
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const ColorPickerItem = (props: {
  key: number;
  color: string;
  onPress: () => void;
  customClassName?: string;
}) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={{ backgroundColor: props.color }}
        className={`w-[40px] h-[40px] rounded-md ${props.customClassName}`}
      ></View>
    </TouchableWithoutFeedback>
  );
};

export default IconPicker;
