import React from "react";
import Svg, {Path} from "react-native-svg";

type ArrowDownProps = {
  color?: string;
  width?: number;
  height?: number;
};

export const ArrowDownComponent = ({
  color = "black",
  width = 20,
  height = 20,
}: ArrowDownProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 6" fill="none">
      <Path
        d="M1 1C1 1 4.68243 4.99999 6.00002 5C7.31761 5.00001 11 1 11 1"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ArrowDownComponent;
