import GlassContainer from "./glass-container";

const IconContainer = (props: {
  color?: string;
  children: React.ReactNode;
  customClassName?: string;
}) => {
  return (
    <GlassContainer
      color={props.color}
      customClassName={`${props.customClassName || "mr-3 w-[40px] h-[40px]"}`}
    >
      {props.children}
    </GlassContainer>
  );
};

export default IconContainer;
