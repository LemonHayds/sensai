import { Switch } from "react-native";
//TEST COMPONENTS
import { View } from "react-native";

import { HeadingText } from "../../components/common/text";
import { BodyText } from "../../components/common/text";
//Custom form components
import ColorPicker from "../../components/form/color-picker";
import DaysPicker from "../../components/form/days-picker";
import IconPicker from "../../components/form/icon-picker";
import Text from "../../components/form/text";
import CustomTimePicker from "../../components/form/time-picker";
import { FormItemType } from "../../types/form-item.type";
import TaskType from "../../types/task.type";

export const FormTypesParser = (props: FormTypesParserProps) => {
  const {
    customClassName = "flex-col space-y-1.5 items-start h-[30px] mb-2",
    selectedTask,
    showLabel = true,
    label,
    itemKey,
    value,
    type,
    inputOptions,
    onChange,
    multipleElements,
  } = props;

  const getMultipleFormElements = (type: string) => {
    return getFormElement(type);
  };

  const getFormElement = (type: string) => {
    switch (type) {
      case "multiple":
        if (!multipleElements || typeof multipleElements === "boolean")
          return <></>;

        const elements = multipleElements;
        const formElements = [];

        elements.forEach((element: FormItemType) => {
          if (element.type && element.type !== "multiple") {
            formElements.push(getMultipleFormElements(element.type));
          }
        });

        return (
          <View className="flex flex-row gap-2 items-center w-full">
            {elements.map((element: FormItemType) => {
              return (
                <View
                  className={`flex flex-col items-start h-full
                  ${elements.length === 2 ? "w-1/2" : "w-1/3"}
                `}
                >
                  <FormLabel
                    label={element.label}
                    customClassName="mb-1.5 top-0"
                  />
                  {element.type && getMultipleFormElements(element.type)}
                </View>
              );
            })}
          </View>
        );

      case "toggle":
        return (
          <Switch
            value={value}
            onValueChange={(newValue: boolean) => onChange(newValue)}
          />
        );

      case "text":
        return (
          <Text
            key={itemKey}
            value={value}
            onChange={onChange}
            customClassName="w-full"
            inputOptions={inputOptions}
          />
        );

      case "iconPicker":
        return (
          <View className="h-fit">
            <IconPicker
              selectedIcon={selectedTask?.icon}
              key={itemKey}
              value={value}
              onChange={onChange}
              inputOptions={inputOptions}
              customClassName="w-full"
            />
          </View>
        );

      case "colorPicker":
        return (
          <View className="h-fit">
            <ColorPicker
              key={itemKey}
              value={value}
              onChange={onChange}
              customClassName="w-full"
            />
          </View>
        );

      case "select":
        return <View>{/* <Text>Select</Text> */}</View>;

      case "daysPicker":
        return (
          <DaysPicker
            key={itemKey}
            value={value}
            onChange={onChange}
            customClassName="w-full"
          />
        );

      case "timePicker":
        return (
          <View key={itemKey}>
            <CustomTimePicker
              key={itemKey}
              value={value}
              onChange={onChange}
              customClassName="w-full"
            />
          </View>
        );

      default:
        return <></>;
    }
  };

  if (!type) return <></>;

  let formElement = getFormElement(type);

  return (
    <View key={itemKey} className={`${customClassName}`} id={itemKey}>
      {showLabel && label && (
        <FormLabel label={label} customClassName="mb-1.5" />
      )}
      <View className="w-full">{formElement}</View>
    </View>
  );
};

export const FormLabel = (props: {
  label?: string;
  customClassName?: string;
}) => {
  return (
    <View className={props.customClassName}>
      <BodyText text={props.label} />
    </View>
  );
};

type FormTypesParserProps = {
  itemKey: string;
  showLabel?: boolean;
  selectedTask?: TaskType;
  onChange: (value: any) => void;
  customClassName?: string;
  multipleElements?: FormItemType[] | boolean;
} & FormItemType;
