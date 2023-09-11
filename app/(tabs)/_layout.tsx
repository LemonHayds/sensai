import { Tabs } from "expo-router";
import { useState } from "react";
import { useColorScheme, View } from "react-native";
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
import TabContainer from "../../components/common/tab-container";
import AddButton from "../../components/common/add-button";
import colors from "../../constants/colors";

export default function Layout() {
  const [addButtonOpened, setAddButtonOpened] = useState(false);
  // const colorScheme = useColorScheme();

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
        />
      </TabContainer>
    </>
  );
}
