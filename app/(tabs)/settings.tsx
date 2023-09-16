import { View } from "react-native";
import { HeadingText } from "../../components/common/text";
import { FlatList } from "react-native-gesture-handler";
import { useColorScheme } from "react-native";
import { useEffect, useState } from "react";
import { FormTypesParser } from "../../constants/parsers/form-types.parser";
import { SettingsType } from "../../types/settings.type";
import {
  updateSettingsValueByKey,
  unmergeSettingsWithConfig,
  updateSettings,
} from "../../utils/settings.utils";

const Settings = (props: any) => {
  // const { settingsState, setSettingsState } = props;

  const { navigate, route } = props;

  console.log(navigate, route);

  const colorScheme = useColorScheme();
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // async function handleSettingsChange(key: string, value: any) {
  //   const updatedSettingsState = updateSettingsValueByKey({
  //     settings: settingsState,
  //     keyToUpdate: key,
  //     newValue: value,
  //   });
  //   setSettingsState(updatedSettingsState);
  //   const unmergedSettings = unmergeSettingsWithConfig(updatedSettingsState);

  //   await updateSettings(unmergedSettings);
  // }

  return (
    <View className="bg-paper flex-1 px-4 py-2">
      <HeadingText text="Settings" customClassName="text-3xl mb-4" />
      {/* <FlatList
        data={settingsState}
        keyExtractor={(item: SettingsType) => item.key}
        renderItem={({ item }) => (
          <FormTypesParser
            key={item.key}
            itemKey={item.key}
            type={item.type}
            label={item.label}
            value={item.value}
            onChange={(key: string, value: any) =>
              handleSettingsChange(key, value)
            }
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      /> */}
    </View>
  );
};

export default Settings;

type SettingsProps = {
  settingsState: boolean;
  setSettingsState: (value: boolean) => void;
};
