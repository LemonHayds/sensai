import GlassContainer from "./glass-container";

const IconContainer = (props: {
  color?: string;
  children: React.ReactNode;
  customClassName?: string;
}) => {
  return (
    <GlassContainer
      color={props.color}
      customClassName={`mr-3 ${props.customClassName || "w-[40px] h-[40px]"}`}
    >
      {props.children}
    </GlassContainer>
  );
};

export default IconContainer;
