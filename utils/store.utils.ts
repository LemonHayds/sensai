import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (
  storageKey: string,
  value: any,
  isValueString?: boolean
) => {
  try {
    await AsyncStorage.setItem(
      storageKey,
      isValueString ? value : JSON.stringify(value)
    );
  } catch (e) {
    console.log("Error storing data", e);
  }
};

export const storeMultipleData = async (data: any[]) => {
  try {
    await AsyncStorage.multiSet(data);
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (storageKey: string, isValueString?: boolean) => {
  try {
    const value = await AsyncStorage.getItem(storageKey);
    return value != null ? (isValueString ? value : JSON.parse(value)) : null;
  } catch (e) {
    console.log("Error getting data", e);
  }
};

export const getMultipleData = async (storageKeys: string[]) => {
  try {
    const value = await AsyncStorage.multiGet(storageKeys);
    return value;
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (storageKey: string, value: any) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const updateMultipleData = async (data: any[]) => {
  try {
    await AsyncStorage.multiMerge(data);
  } catch (error) {
    console.log(error);
  }
};

export const removeData = async (props: {
  storageKey?: string;
  allData?: boolean;
}) => {
  const { storageKey, allData } = props;
  try {
    if (!allData && storageKey) {
      await AsyncStorage.removeItem(storageKey);
      return;
    } else {
      await AsyncStorage.clear();
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
