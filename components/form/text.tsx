import { TextInput, View } from "react-native";

import GlobalClasses from "../../constants/styles/global.classes";
import { FormItemType } from "../../types/form-item.type";

const Text = (
  props: FormItemType & {
    onChange: (value: any) => void;
    customClassName?: string;
  }
) => {
  return (
    <View className={props.customClassName}>
      <TextInput
        placeholder={props?.inputOptions?.placeholder || ""}
        value={props?.value || ""}
        onChangeText={(text) => {
          props.onChange(text);
        }}
        onSubmitEditing={() => {}}
        style={{
          height: 40,
          padding: 0,
          marginBottom: 0,
          paddingHorizontal: 10,
        }}
        className={`bg-light-paper dark:bg-light-black text-black dark:text-white h-full rounded-md border ${GlobalClasses.border}`}
      />
    </View>
  );
};

export default Text;
