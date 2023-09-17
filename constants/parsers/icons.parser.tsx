import {
  Phone,
  ShoppingCart,
  Armchair,
  Bathtub,
  Shower,
  File,
  Code,
  FileCss,
  FileHtml,
  FileJs,
  FileJsx,
  FileTs,
  FileTsx,
  FilmStrip,
  FilmScript,
  VideoCamera,
  Target,
  Crosshair,
  GameController,
  Headphones,
} from "phosphor-react-native";
import { useColorScheme } from "nativewind";

export const IconParser = (props: IconParserProps) => {
  let { iconKey, color, size = 22, weight = "fill" } = props;
  const { colorScheme } = useColorScheme();

  if (!color) {
    color = colorScheme === "dark" ? "white" : "black";
  }

  let iconElement = <></>;

  switch (iconKey) {
    // case "yinyang":
    //   iconElement = <YinYang color={color} size={size} weight={weight} />;
    //   break;

    default:
      iconElement = <></>;
  }

  return { iconElement };
};

type IconParserProps = {
  iconKey: string;
  color?: string;
  size?: number;
  weight?: "fill" | "regular" | "duotone";
};
