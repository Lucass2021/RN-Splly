import React from "react";
import Svg, {Path} from "react-native-svg";

type ArrowLeftProps = {
  color?: string;
  width?: number;
  height?: number;
};

export const ArrowLeftComponent = ({
  color = "black",
  width = 20,
  height = 20,
}: ArrowLeftProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path
        d="M1 7.99972H24M1 7.99972C1 9.84436 8.18722 15 8.18722 15M1 7.99972C1 6.15508 8.18736 1 8.18736 1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowLeftComponent;
