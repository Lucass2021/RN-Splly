import React from "react";
import Svg, {Path} from "react-native-svg";

type TargetProps = {
  color?: string;
  width?: number;
  height?: number;
};

export const TargetComponent = ({
  color = "black",
  width = 20,
  height = 20,
}: TargetProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 27 27" fill="none">
      <Path
        d="M26 13.5H23.619M3.38095 13.5H1M13.5 1V3.38095M13.5 23.619V26M23.6354 13.5C23.6354 19.0886 19.1049 23.619 13.5163 23.619C7.92768 23.619 3.39723 19.0886 3.39723 13.5C3.39723 7.9114 7.92768 3.38095 13.5163 3.38095C19.1049 3.38095 23.6354 7.9114 23.6354 13.5ZM17.0714 13.5C17.0714 15.4725 15.4724 17.0714 13.5 17.0714C11.5275 17.0714 9.92851 15.4725 9.92851 13.5C9.92851 11.5275 11.5275 9.92857 13.5 9.92857C15.4724 9.92857 17.0714 11.5275 17.0714 13.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default TargetComponent;
