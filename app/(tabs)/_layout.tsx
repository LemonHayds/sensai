import { Tabs } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import {
  AdjustmentsHorizontalIcon,
  ChartBarIcon,
  HomeIcon,
  CheckCircleIcon,
} from "react-native-heroicons/outline";
import {
  AdjustmentsHorizontalIcon as AdjustmentsHorizontalIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  HomeIcon as HomeIconSolid,
  CheckCircleIcon as CheckCircleIconSolid,
} from "react-native-heroicons/solid";

//Settings
import {
  getSettings,
  initiateSettings,
  mergeConfigWithStoredSettings,
} from "../../utils/settings.utils";
import { settingsConfig } from "../../constants/configs/settings.config";

//OTHER HERE

import TabContainer from "../../components/common/tab-container";
import AddButton from "../../components/common/add-button";

export default function Layout() {
  const [settingsState, setSettingsState] = useState(["test"]);
  const [addButtonOpened, setAddButtonOpened] = useState(false);

  useEffect(() => {
    //SETTINGS
    async function fetchSettings() {
      let storedSettings = await getSettings();
      console.log("storedSettings", storedSettings);

      if (!storedSettings || Object.keys(storedSettings).length === 0) {
        await initiateSettings();
        storedSettings = await getSettings();
      }
      const mergedSettings = mergeConfigWithStoredSettings({
        settingsConfig: settingsConfig,
        storedSettings,
      });
      return setSettingsState(mergedSettings);
    }
    fetchSettings();
  }, []);

  return (
    <>
      <TabContainer>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View className="absolute top-[50%]">
                  {focused ? (
                    <HomeIconSolid color={"black"} size={26} />
                  ) : (
                    <HomeIcon color={"grey"} size={26} />
                  )}
                </View>
              );
            },
          }}
          listeners={{
            tabPress: () => setAddButtonOpened(false),
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View className="absolute top-[50%]">
                  {focused ? (
                    <CheckCircleIconSolid color={"black"} size={26} />
                  ) : (
                    <CheckCircleIcon color={"grey"} size={26} />
                  )}
                </View>
              );
            },
          }}
          listeners={{
            tabPress: () => setAddButtonOpened(false),
          }}
        />
        <Tabs.Screen
          name="new-task"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <AddButton
                  opened={addButtonOpened}
                  setOpened={setAddButtonOpened}
                />
              );
            },
          }}
          listeners={{
            tabPress: () => setAddButtonOpened(false),
          }}
        />
        <Tabs.Screen
          name="performance"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View className="absolute top-[50%]">
                  {focused ? (
                    <ChartBarIconSolid color={"black"} size={26} />
                  ) : (
                    <ChartBarIcon color={"grey"} size={26} />
                  )}
                </View>
              );
            },
          }}
          listeners={{
            tabPress: () => setAddButtonOpened(false),
          }}
        />
        <Tabs.Screen
          name="settings"
          //pass props to settings
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View className="absolute top-[50%]">
                  {focused ? (
                    <AdjustmentsHorizontalIconSolid color={"black"} size={26} />
                  ) : (
                    <AdjustmentsHorizontalIcon color={"grey"} size={26} />
                  )}
                </View>
              );
            },
          }}
          listeners={{
            tabPress: () => setAddButtonOpened(false),
          }}
          initialParams={{ settingsState, setSettingsState }}
        />
      </TabContainer>
    </>
  );
}
