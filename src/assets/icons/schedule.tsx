import React from "react";
import Svg, {Path} from "react-native-svg";

type ScheduleProps = {
  color?: string;
  width?: number;
  height?: number;
};

export const ScheduleComponent = ({
  color = "black",
  width = 20,
  height = 20,
}: ScheduleProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 27 28" fill="none">
      <Path
        d="M21.3947 1V3.6M5.60526 1V3.6M13.4941 15.3H13.5059M13.4941 20.5H13.5059M18.7513 15.3H18.7632M8.23684 15.3H8.24865M8.23684 20.5H8.24865M2.31579 8.8H24.6842M1.65789 8.8H25.3421M1 14.3162C1 8.65172 1 5.81946 2.64753 4.05973C4.29505 2.3 6.9467 2.3 12.25 2.3H14.75C20.0533 2.3 22.705 2.3 24.3525 4.05973C26 5.81946 26 8.65172 26 14.3162V14.9838C26 20.6483 26 23.4805 24.3525 25.2403C22.705 27 20.0533 27 14.75 27H12.25C6.9467 27 4.29505 27 2.64753 25.2403C1 23.4805 1 20.6483 1 14.9838V14.3162Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ScheduleComponent;
