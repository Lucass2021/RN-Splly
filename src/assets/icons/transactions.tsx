import React from "react";
import Svg, {Path} from "react-native-svg";

type TransactionsProps = {
  color?: string;
  width?: number;
  height?: number;
};

export const TransactionsComponent = ({
  color = "black",
  width = 20,
  height = 20,
}: TransactionsProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 21" fill="none">
      <Path
        d="M19.4722 3.63889H7.86111C3.94154 3.63889 1 6.47309 1 10.5M1.52778 17.3611H13.1389C17.0585 17.3611 20 14.5269 20 10.5M17.3611 1C17.3611 1 20 2.94351 20 3.63891C20 4.33431 17.3611 6.27778 17.3611 6.27778M3.63887 14.7222C3.63887 14.7222 1.00001 16.6657 1 17.3611C0.999989 18.0565 3.63889 20 3.63889 20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TransactionsComponent;
