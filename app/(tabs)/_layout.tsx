import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, TouchableOpacity } from "react-native";
import NavigatorBar from "../../components/core/NavigatorBar";
import TextStyles from "../../constants/TextStyles";
import {
  HomeModernIcon,
  ChartBarIcon,
  CheckIcon,
  PlusIcon,
  RectangleStackIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
const colors = require("../../constants/colors");

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <NavigatorBar>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: () => <HomeModernIcon color={colors.red} size={25} />,
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          tabBarIcon: ({ color }) => (
            <RectangleStackIcon color={colors.red} size={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="performance"
        options={{
          tabBarIcon: ({ color }) => (
            <ChartBarIcon color={colors.red} size={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <AdjustmentsHorizontalIcon color={colors.red} size={25} />
          ),
        }}
      />
    </NavigatorBar>
  );
}
