import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Tabs } from "expo-router";

type NavigatorBarProps = {
  children: React.ReactNode;
};

const NavigatorBar = (props: NavigatorBarProps) => {
  const { bottom } = useSafeAreaInsets();
  const { children } = props;

  return <Tabs screenOptions={{ headerShown: false }}>{children}</Tabs>;
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
  },
  activeBackground: {
    position: "absolute",
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "white",
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 36,
    height: 36,
  },
});

export default NavigatorBar;
