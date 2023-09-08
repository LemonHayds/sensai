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
          backgroundColor: "white",
          position: "absolute",
          bottom: 5,
          marginHorizontal: 20,
          height: 60,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOpacity: 0.05,
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
