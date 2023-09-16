import { createContext, useState, useEffect, ReactNode } from "react";
import {
  getSettings,
  initiateSettings,
  updateSettingsValueByKey,
  updateSettings,
  syncSettings,
} from "../../utils/settings.utils";
import { useColorScheme } from "nativewind";
import { removeData } from "../../utils/store.utils";

type SettingsContextType = {
  savedSettings: any;
  setSavedSettingsWithUpdate: (key: string, value: any) => Promise<void>;
};

const defaultValue: SettingsContextType = {
  savedSettings: [],
  setSavedSettingsWithUpdate: async () => {},
};

const SettingsContext = createContext(defaultValue);

const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [savedSettings, setSavedSettings] = useState<any[]>(
    defaultValue.savedSettings
  );

  useEffect(() => {
    async function fetchSettings() {
      // await removeData({ storageKey: "settings" });
      let storedSettings: any[] = await getSettings();

      //If settings doesn't exist, initiate it
      if (!storedSettings || Object.keys(storedSettings).length === 0) {
        await initiateSettings();
        storedSettings = await getSettings();
      } else {
        storedSettings = await syncSettings(storedSettings);
      }

      setSavedSettings(storedSettings);

      const isDarkMode = storedSettings.find(
        (setting) => setting.key === "dark-mode"
      ).value;

      if (colorScheme !== "dark" && isDarkMode) {
        toggleColorScheme();
      }
    }
    fetchSettings();
  }, []);

  const setSavedSettingsWithUpdate = async (key: string, value: any) => {
    const updatedSettings = updateSettingsValueByKey({
      keyToUpdate: key,
      newValue: value,
      previousSettings: savedSettings,
    });
    setSavedSettings(updatedSettings);
    await updateSettings(updatedSettings);
  };

  const contextValue: SettingsContextType = {
    savedSettings,
    setSavedSettingsWithUpdate,
  };

  //DARK MODE
  useEffect(() => {
    toggleColorScheme();
  }, [savedSettings]);

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
