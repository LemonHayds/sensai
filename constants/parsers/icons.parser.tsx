import React from "react";
import { useColorScheme } from "nativewind";
import { CheckSquare } from "phosphor-react-native";
import { findIconByKey } from "../../utils/icons.utils";

type IconParserProps = {
  iconKey?: string;
  color?: string;
  size?: number;
  weight?: "fill" | "regular" | "duotone";
};

export const IconParser = (props: IconParserProps) => {
  let { iconKey, color, size = 22, weight = "fill" } = props;
  const { colorScheme } = useColorScheme();

  if (!color) {
    color = colorScheme === "dark" ? "white" : "black";
  }

  const icon = findIconByKey(iconKey);

  if (icon?.component) {
    return (
      <IconWrapper color={color} size={size} weight={weight}>
        {icon.component}
      </IconWrapper>
    );
  } else {
    <CheckSquare color={color} size={size} weight={weight} />;
  }
};

export const IconWrapper = ({
  color,
  size,
  weight,
  children,
}: IconParserProps & { children: React.ReactNode }) => {
  return React.cloneElement(children as React.ReactElement, {
    color,
    size,
    weight,
  });
};

export default IconParser;
