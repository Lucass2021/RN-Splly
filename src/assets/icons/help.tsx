import React from "react";
import Svg, {Path} from "react-native-svg";

type HelpProps = {
  color?: string;
  width?: number;
  height?: number;
};

export const HelpComponent = ({
  color = "black",
  width = 20,
  height = 20,
}: HelpProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <Path
        d="M9 8C9 6.89543 9.8954 6 11 6C12.1046 6 13 6.89543 13 8C13 8.39815 12.8837 8.76913 12.6831 9.0808C12.0854 10.0097 11 10.8954 11 12V12.5M10.992 16H11.001M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default HelpComponent;
