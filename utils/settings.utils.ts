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

export const mergeConfigWithStoredSettings = (props: {
  settingsConfig: any;
  storedSettings: any[];
}) => {
  const { settingsConfig, storedSettings } = props;

  const mappedSettings = settingsConfig.map((setting: any) => {
    const storedSetting = storedSettings.find(
      (ss: any) => ss.key === setting.key
    );
    const result: any = {
      key: setting.key,
      label: setting.label,
      type: setting.type,
      value: storedSetting ? storedSetting.value : setting.default,
    };
    if (setting.selectItems) {
      result.selectOptions = setting.selectItems;
    }
    return result;
  });

  return mappedSettings;
};

export const unmergeSettingsWithConfig = (settings: any) => {
  const unmergedSettings = settings.map((setting: any) => {
    const result: any = {
      key: setting.key,
      value: setting.value,
    };
    return result;
  });
  return unmergedSettings;
};

export const updateSettingsValueByKey = (props: {
  settings: any;
  keyToUpdate: string;
  newValue: any;
}) => {
  const { settings, keyToUpdate, newValue } = props;
  const updatedSettings = settings.map((setting: any) => {
    if (setting.key === keyToUpdate) {
      return { ...setting, value: newValue };
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
