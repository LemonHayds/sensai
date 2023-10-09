import { View } from "react-native";
import { HeadingText } from "../../components/common/text";
import { FlatList } from "react-native-gesture-handler";
import { useContext } from "react";
import { SettingsContext } from "../../components/providers/settings-provider";
import { useEffect, useState } from "react";
import { FormTypesParser } from "../../constants/parsers/form-types.parser";
import { SettingsType } from "../../types/settings.type";
import { mergeConfigWithStoredSettings } from "../../utils/settings.utils";
import { settingsConfig } from "../../constants/configs/settings.config";
import GlobalClasses from "../../constants/styles/global.classes";
import { useColorScheme } from "nativewind";

const Settings = () => {
  const [mergedSettings, setMergedSettings] = useState<any>([]);
  const { savedSettings, setSavedSettingsWithUpdate } =
    useContext(SettingsContext);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  useEffect(() => {
    const mergedSettings = mergeConfigWithStoredSettings({
      settingsConfig,
      storedSettings: savedSettings,
    });
    setMergedSettings(mergedSettings);
  }, [savedSettings]);

  const handleSettingsChange = async (key: string, value: any) => {
    setSavedSettingsWithUpdate(key, value);

    if (key === "dark-mode") {
      toggleColorScheme();
    }
  };

  return (
    <View className={`${GlobalClasses.bg} flex-1 px-4 py-2`}>
      <HeadingText text="Settings" customClassName="text-3xl mb-4" />
      <FlatList
        data={mergedSettings}
        keyExtractor={(item: SettingsType) => item.key}
        renderItem={({ item }) => (
          <FormTypesParser
            key={item.key}
            itemKey={item.key}
            type={item.type}
            label={item.label}
            value={item.value}
            onChange={(value: any) => handleSettingsChange(item.key, value)}
            customClassName="mb-4"
          />
        )}
      />
    </View>
  );
};

export default Settings;
