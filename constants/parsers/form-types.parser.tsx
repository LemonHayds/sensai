import { Switch } from "react-native";
//TEST COMPONENTS
import { View } from "react-native";

//Custom form components
import ColorPicker from "../../components/form/color-picker";
import IconPicker from "../../components/form/icon-picker";
import Text from "../../components/form/text";
import DaysPicker from "../../components/form/days-picker";
import { HeadingText } from "../../components/common/text";
import { BodyText } from "../../components/common/text";
import { FormItemType } from "../../types/form-item.type";

export const FormTypesParser = (props: FormTypesParserProps) => {
  const {
    customClassName = "flex-col space-y-1.5 items-start h-[30px] mb-2",
    showLabel = true,
    label,
    itemKey,
    value,
    type,
    inputOptions,
    onChange,
  } = props;

  let formElement = <></>;

  switch (type) {
    case "toggle":
      formElement = (
        <Switch
          value={value}
          onValueChange={(newValue: boolean) => onChange(newValue)}
        />
      );
      break;

    case "text":
      formElement = (
        <Text
          key={itemKey}
          value={value}
          onChange={onChange}
          customClassName="w-full"
          inputOptions={inputOptions}
        />
      );
      break;

    case "iconPicker":
      formElement = (
        <View className="h-fit">
          <IconPicker
            key={itemKey}
            value={value}
            onChange={onChange}
            customClassName="w-full"
          />
        </View>
      );
      break;

    case "colorPicker":
      formElement = (
        <View className="h-fit">
          <ColorPicker
            key={itemKey}
            value={value}
            onChange={onChange}
            customClassName="w-full"
          />
        </View>
      );
      break;

    case "select":
      formElement = <View>{/* <Text>Select</Text> */}</View>;
      break;

    case "daysPicker":
      formElement = (
        <DaysPicker
          key={itemKey}
          value={value}
          onChange={onChange}
          customClassName="w-full"
        />
      );
      break;

    default:
      formElement = <></>;
  }

  return (
    <View className={`${customClassName}`} id={itemKey}>
      <View className="mb-1.5">
        {showLabel && label && <BodyText text={label} />}
      </View>
      <View className="w-full">{formElement}</View>
    </View>
  );
};

type FormTypesParserProps = {
  itemKey: string;
  showLabel?: boolean;
  onChange: (value: any) => void;
  customClassName?: string;
} & FormItemType;
