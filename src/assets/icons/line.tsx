import React from "react";
import Svg, {Rect} from "react-native-svg";

type LineProps = {
  color?: string;
  width?: number;
  height?: number;
};

export const LineComponent = ({
  color = "black",
  width = 20,
  height = 20,
}: LineProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 3" fill="none">
      <Rect y="0.5" width="12" height="2" rx="1" fill={color} />
    </Svg>
  );
};

export default LineComponent;
