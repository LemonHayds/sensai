import { Text, View, Image } from "react-native";

type ProfilePictureProps = {
  imageUrl?: string;
  width?: number;
  height?: number;
  customClassName?: string;
};

export default function ProfilePicture(props: ProfilePictureProps) {
  const {
    imageUrl = "https://pbs.twimg.com/profile_images/1484650773300617218/6Ep8yM9E_400x400.jpg",
    width = 0,
    height = 50,
    customClassName = "",
  } = props;

  return (
    <Image
      className={`border border-white rounded-full ${customClassName}`}
      source={{ uri: imageUrl }}
      style={{ width, height }}
    />
  );
}
