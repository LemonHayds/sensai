import { Switch } from "react-native";
//TEST COMPONENTS
import { View } from "react-native";

//Custom form components
import ColorPicker from "../../components/common/form/color-picker";
import Text from "../../components/common/form/text";
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
      formElement = formElement = (
        <Text
          key={itemKey}
          value={value}
          onChange={onChange}
          customClassName="w-full"
        />
      );

    case "colorPicker":
      formElement = (
        <ColorPicker
          key={itemKey}
          value={value}
          onChange={onChange}
          customClassName="w-full"
        />
      );
      break;

    case "select":
      formElement = <View>{/* <Text>Select</Text> */}</View>;
      break;

    default:
      formElement = <></>;
  }

  return (
    <View className={`${customClassName}`} id={itemKey}>
      <View>{showLabel && label && <BodyText text={label} />}</View>
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
