import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { View } from "react-native";
import { useColorScheme } from "nativewind";

const CustomTimePicker = (props: {
  key: string;
  customClassName?: string;
  onChange: (value: any) => void;
  value: any;
}) => {
  const { key, customClassName, onChange, value } = props;

  const { colorScheme } = useColorScheme();

  const [date, setDate] = useState(new Date());

  return (
    <View className={customClassName} id={key}>
      <View className="flex-row w-full ml-[-10px]">
        <DateTimePicker
          themeVariant={colorScheme === "dark" ? "dark" : "light"}
          value={date}
          mode={"time"}
          is24Hour={true}
          onChange={(e, selectedDate) => {
            if (selectedDate) setDate(selectedDate);
          }}
        />
      </View>
    </View>
  );
};

export default CustomTimePicker;
