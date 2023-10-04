import colorsStyles from "../constants/styles/colors.styles";

export const generateTimeBasedId = () => {
  const timestamp = Date.now();
  const randomId = `${timestamp}-${Math.floor(Math.random() * 10000)}`;
  return randomId;
};

export const getColorByKey = (key: string) => {
  // @ts-ignore
  return colorsStyles[key] || colors.default;
};
