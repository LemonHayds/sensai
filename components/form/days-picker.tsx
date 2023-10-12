import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { BodyText } from "../common/text";
import { FlatList } from "react-native-gesture-handler";
import GlobalClasses from "../../constants/styles/global.classes";

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const DaysPicker = (props: {
  customClassName?: string;
  onChange: (value: any) => void;
  value: any;
}) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const handleDaySelection = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
    props.onChange(selectedDays);
  };
  return (
    <FlatList
      horizontal={true}
      data={days}
      showsHorizontalScrollIndicator={false}
      className="my-1"
      renderItem={({ item: day, index }) => (
        <TouchableOpacity onPress={() => handleDaySelection(day)}>
          <View
            key={day}
            className={`rounded-lg flex-row items-center justify-center py-1.5 px-3
            ${
              selectedDays.includes(day)
                ? "bg-light-red/50"
                : GlobalClasses["light-bg"]
            }
            ${index !== days.length - 1 && "mr-2"}`}
          >
            <BodyText text={day} customClassName="capitalize" />
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
};

export default DaysPicker;
