import { TextInput, View } from "react-native";
import { useState } from "react";
import GlobalClasses from "../../constants/styles/global.classes";
import { FormItemType } from "../../types/form-item.type";

const Text = (
  props: FormItemType & {
    onChange: (value: any) => void;
    customClassName?: string;
  }
) => {
  const isMultiline = props?.inputOptions?.multiline || false;
  const [height, updateHeight] = useState(40);
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
          height: isMultiline ? height : 40,
          padding: 10,
          marginBottom: 0,
        }}
        editable={true}
        multiline={isMultiline}
        onContentSizeChange={(e) =>
          updateHeight(e.nativeEvent.contentSize.height)
        }
        // autoGrow={true}
        className={`bg-light-paper dark:bg-light-black text-black dark:text-white h-full rounded-md border ${GlobalClasses.border}`}
      />
    </View>
  );
};

export default Text;
