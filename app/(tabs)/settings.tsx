import { Text, View } from "react-native";
import { HeadingText } from "../../components/common/text";
import { settings } from "../../constants/configs/settings.config";
import { FlatList } from "react-native-gesture-handler";
import { useColorScheme } from "react-native";
import { useState } from "react";
import { Switch } from "react-native-gesture-handler";

const Settings = () => {
  const colorScheme = useColorScheme();
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <View className="bg-paper flex-1 px-4 py-2">
      <HeadingText text="Settings" customClassName="text-3xl mb-4" />
      <Switch
        value={colorScheme === "dark"}
        onValueChange={() => setDarkMode(!darkMode)}
      />

      <FlatList
        data={settings}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) => (
          <View key={item.name}>
            <Text>{item.name}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </View>
  );
};

export default Settings;
