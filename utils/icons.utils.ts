import { icons } from "../constants/icons";
import { IconType } from "../types/icons.type";

export const findIconByKey = (key?: string): IconType | null => {
  const allIcons = icons;

  for (const group of allIcons) {
    const icon = group.icons.find((icon: IconType) => icon.key === key);
    if (icon) {
      return icon;
    }
  }

  return null;
};
