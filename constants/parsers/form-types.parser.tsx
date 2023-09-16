import { Switch } from "react-native";
import { FormItemType } from "../../types/form-item.type";

//TEST COMPONENTS
import { Text, View } from "react-native";
import { BodyText } from "../../components/common/text";

export const FormTypesParser = (props: FormTypesParserProps) => {
  const {
    customClassName = "flex-row justify-between items-center h-[30px] mb-2",
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
          onValueChange={(newValue: boolean) => onChange(itemKey, newValue)}
        />
      );
      break;

    case "colorPicker":
      formElement = (
        <View>
          <Text>Color Picker</Text>
        </View>
      );
      break;

    case "select":
      formElement = (
        <View>
          <Text>Select</Text>
        </View>
      );
      break;

    default:
      formElement = <></>;
  }

  return (
    <View className={customClassName} id={itemKey}>
      {showLabel && label && <BodyText text={label} />}
      {formElement}
    </View>
  );
};

type FormTypesParserProps = {
  itemKey: string;
  showLabel?: boolean;
  onChange: (key: string, value: any) => void;
  customClassName?: string;
} & FormItemType;
