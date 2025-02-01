import React from "react";
import Svg, {Path} from "react-native-svg";

type ArrowRightProps = {
  color?: string;
  width?: number;
  height?: number;
};

export const ArrowRightComponent = ({
  color = "black",
  width = 20,
  height = 20,
}: ArrowRightProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path
        d="M24 7.99972H1M24 7.99972C24 9.84436 16.8128 15 16.8128 15M24 7.99972C24 6.15508 16.8126 1 16.8126 1"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ArrowRightComponent;
