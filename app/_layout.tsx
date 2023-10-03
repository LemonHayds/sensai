import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingsProvider } from "../components/providers/settings-provider";
import { TasksProvider } from "../components/providers/tasks-provider";
import GlobalClasses from "../constants/styles/global.classes";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Quando: require("../assets/fonts/Quando.ttf"),
    Ubuntu: require("../assets/fonts/Ubuntu.ttf"),
    Nikkyou: require("../assets/fonts/Nikkyou.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { colorScheme } = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <SafeAreaView style={{ flex: 1 }} className={GlobalClasses.bg}>
        <SettingsProvider>
          <TasksProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen
                name="task-detail"
                options={{
                  headerShown: false,
                  presentation: "transparentModal",
                  animation: "fade",
                }}
              />
              <Stack.Screen
                name="edit-task"
                options={{
                  headerShown: false,
                  presentation: "transparentModal",
                  animation: "slide_from_bottom",
                }}
              />
            </Stack>
          </TasksProvider>
        </SettingsProvider>
      </SafeAreaView>
    </>
  );
}
