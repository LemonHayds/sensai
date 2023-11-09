import { useState } from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { icons } from "../../constants/icons";
import { IconWrapper } from "../../constants/parsers/icons.parser";
import { useColorScheme } from "nativewind";
import { FormItemType } from "../../types/form-item.type";
import Button from "../common/button";
import { BodyText } from "../common/text";

const IconPicker = (
  props: FormItemType & {
    onChange: (value: any) => void;
    selectedIcon?: string;
    customClassName?: string;
  }
) => {
  const [selectedIcon, setSelectedIcon] = useState(props.value);
  const [showMore, setShowMore] = useState(false);

  const { colorScheme } = useColorScheme();

  const handleIconChange = (key: string) => {
    setSelectedIcon(key);
    props.onChange(key);
  };

  // if (Array.isArray(allIcons)) {
  //   icons.forEach((group, index) => {
  //     group.icons.forEach((icon, iIndex) => {
  //       if (icon.key === selectedIcon) {
  //         groupIndex = index;
  //         iconIndex = iIndex;
  //       }
  //     });
  //   });

  //   if (groupIndex !== -1 && iconIndex !== -1) {
  //     const selected = allIcons[groupIndex].icons.splice(iconIndex, 1)[0];
  //     allIcons[0].icons.unshift(selected);
  //   }
  // }

  return (
    <View className={`${props.customClassName}`}>
      <View className="flex flex-col w-full items-center">
        {Array.isArray(icons) &&
          icons.map((group, index) => (
            <View
              key={group.group}
              className={`mb-4
              ${
                index !== 0 && showMore
                  ? "block"
                  : index === 0
                  ? "block"
                  : "hidden"
              }`}
            >
              {index !== 0 && (
                <BodyText customClassName="mb-2" text={group.group} />
              )}
              <View className="flex flex-row w-full items-center flex-wrap gap-1">
                {group.icons.map((icon: any) => (
                  <View key={icon.key}>
                    <IconPickerItem
                      key={icon.key}
                      onPress={() => {
                        handleIconChange(icon.key);
                      }}
                      customClassName={
                        selectedIcon === icon.key
                          ? `border-[2px] border-black/80 dark:border-white/80`
                          : ""
                      }
                    >
                      <IconWrapper
                        color={colorScheme === "dark" ? "white" : "black"}
                        weight={selectedIcon === icon.key ? "fill" : "regular"}
                      >
                        {icon.component}
                      </IconWrapper>
                    </IconPickerItem>
                  </View>
                ))}
              </View>
            </View>
          ))}
      </View>
      <View className="flex-row justify-end">
        <Button
          onPress={() => setShowMore(!showMore)}
          customClassName="w-[100px]"
        >
          <BodyText
            text={showMore ? "Show less" : "Show more"}
            customClassName="text-center"
          />
        </Button>
      </View>
    </View>
  );
};

const IconPickerItem = (props: {
  key: string;
  onPress: () => void;
  customClassName?: string;
  children: React.ReactNode;
}) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        className={`bg-grey/10 w-[40px] h-[40px] rounded-lg ${props.customClassName} flex-row items-center justify-center`}
      >
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default IconPicker;
