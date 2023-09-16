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

const Settings = () => {
  const [mergedSettings, setMergedSettings] = useState<any>([]);
  const { savedSettings, setSavedSettingsWithUpdate } =
    useContext(SettingsContext);

  useEffect(() => {
    const mergedSettings = mergeConfigWithStoredSettings({
      settingsConfig,
      storedSettings: savedSettings,
    });
    setMergedSettings(mergedSettings);
  }, [savedSettings]);

  const handleSettingsChange = async (key: string, value: any) => {
    setSavedSettingsWithUpdate(key, value);
  };

  return (
    <View className="bg-paper flex-1 px-4 py-2">
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
            onChange={(key: string, value: any) =>
              handleSettingsChange(key, value)
            }
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </View>
  );
};

export default Settings;
