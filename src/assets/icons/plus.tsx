import React from "react";
import Svg, {Path} from "react-native-svg";

type PlusProps = {
  color?: string;
  width?: number;
  height?: number;
};

export const PlusComponent = ({
  color = "black",
  width = 20,
  height = 20,
}: PlusProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <Path
        d="M11 7V15M15 11H7M21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default PlusComponent;
