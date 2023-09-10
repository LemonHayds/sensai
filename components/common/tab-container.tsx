const colors = require("../../constants/colors");
import { Tabs } from "expo-router";

type TabBarContainerProps = {
  children: React.ReactNode;
};

const TabContainer = (props: TabBarContainerProps) => {
  const { children } = props;

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors["paper"],
          position: "absolute",
          bottom: 0,
          height: 60,
          shadowColor: "#000",
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
