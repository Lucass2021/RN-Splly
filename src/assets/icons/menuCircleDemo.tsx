import React from "react";
import Svg, {Path} from "react-native-svg";

type MenuCircleDemoComponentProps = {
  color?: string;
  width?: number;
  height?: number;
};

export const MenuCircleDemoComponent = ({
  color = "black",
  width = 20,
  height = 20,
}: MenuCircleDemoComponentProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 37 37" fill="none">
      <Path
        d="M24.3333 10.7222L1 32.1111M24.3339 26.2778L16.5556 18.5M1 4.8891L11.6944 14.6111M36 6.83333C36 10.055 33.3884 12.6667 30.1667 12.6667C26.9449 12.6667 24.3333 10.055 24.3333 6.83333C24.3333 3.61168 26.9449 1 30.1667 1C33.3884 1 36 3.61168 36 6.83333ZM36 30.1667C36 33.3884 33.3884 36 30.1667 36C26.9449 36 24.3333 33.3884 24.3333 30.1667C24.3333 26.9449 26.9449 24.3333 30.1667 24.3333C33.3884 24.3333 36 26.9449 36 30.1667Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default MenuCircleDemoComponent;
