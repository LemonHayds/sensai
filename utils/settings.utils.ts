import { getData, storeData, updateData } from "./store.utils";
import { settingsConfig } from "../constants/configs/settings.config";

const STORAGE_KEY = "settings";

export const initiateSettings = async () => {
  const initialMappedSettings = Object.keys(settingsConfig).map(
    (index: any) => ({
      key: settingsConfig[index].key,
      value: settingsConfig[index].default,
    })
  );
  await storeData(STORAGE_KEY, initialMappedSettings);
};

export const syncSettings = async (storedSettings: any[]) => {
  const syncedSettings = [...storedSettings];

  settingsConfig.forEach((configSetting) => {
    const { key, default: defaultValue } = configSetting;

    if (!syncedSettings.some((setting) => setting.key === key)) {
      syncedSettings.push({ key, value: defaultValue });
    }
  });

  const settingsChanged =
    JSON.stringify(syncedSettings) !== JSON.stringify(storedSettings);

  if (settingsChanged) {
    await updateSettings(syncedSettings);
  }

  return syncedSettings;
};

export const mergeConfigWithStoredSettings = (props: {
  settingsConfig: any[];
  storedSettings: any[];
}) => {
  const { settingsConfig, storedSettings } = props;

  const mergedSettings = storedSettings
    .filter((savedSetting) =>
      settingsConfig.some(
        (configSetting) => configSetting.key === savedSetting.key
      )
    )
    .map((savedSetting) => {
      const configSetting = settingsConfig.find(
        (setting) => setting.key === savedSetting.key
      );
      const result: any = {
        key: configSetting.key,
        label: configSetting.label,
        type: configSetting.type,
        value:
          !savedSetting.value !== undefined
            ? savedSetting.value
            : configSetting.default,
      };

      if (configSetting && configSetting.selectItems) {
        result.selectOptions = configSetting.selectItems;
      }

      return result;
    });

  return mergedSettings;
};

export const updateSettingsValueByKey = (props: {
  previousSettings: any;
  keyToUpdate: string;
  newValue: any;
}) => {
  const { previousSettings, keyToUpdate, newValue } = props;

  // Filter out settings that are not in settingsConfig
  const filteredSettings = previousSettings.filter((setting: any) =>
    settingsConfig.some((configSetting) => configSetting.key === setting.key)
  );

  // Update the value for the specified key
  const updatedSettings = filteredSettings.map((setting: any) => {
    if (setting.key === keyToUpdate) {
      setting.value = newValue;
    }
    return setting;
  });

  return updatedSettings;
};

export const getSettings = async () => {
  const settings = await getData(STORAGE_KEY);
  return settings;
};

export const updateSettings = async (settings: any) => {
  await updateData(STORAGE_KEY, settings);
};
