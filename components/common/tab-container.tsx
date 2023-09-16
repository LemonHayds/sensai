const colors = require("../../constants/styles/colors.styles");
import { useColorScheme } from "nativewind";
import { Tabs } from "expo-router";

type TabBarContainerProps = {
  children: React.ReactNode;
};

const TabContainer = (props: TabBarContainerProps) => {
  const { children } = props;
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor:
            colorScheme === "dark" ? colors["black"] : colors["paper"],
          position: "absolute",
          bottom: 0,
          height: 60,
          shadowColor: "#000",
          paddingHorizontal: 5,
          shadowOpacity: 0.15,
          shadowOffset: {
            width: 2,
            height: 2,
          },
        },
        tabBarLabelStyle: {
          display: "none",
        },
        headerShown: false,
      }}
    >
      {children}
    </Tabs>
  );
};

export default TabContainer;
