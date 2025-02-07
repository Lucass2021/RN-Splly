import React from "react";
import Svg, {Path} from "react-native-svg";

type ProfileProps = {
  color?: string;
  width?: number;
  height?: number;
};

export const ProfileComponent = ({
  color = "black",
  width = 20,
  height = 20,
}: ProfileProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 27 28" fill="none">
      <Path
        d="M7.875 20.25C10.7896 17.1973 16.179 17.0535 19.125 20.25M26 14C26 20.9036 20.4036 26.5 13.5 26.5C6.59644 26.5 1 20.9036 1 14C1 7.09644 6.59644 1.5 13.5 1.5C20.4036 1.5 26 7.09644 26 14ZM16.6189 10.875C16.6189 12.6009 15.2177 14 13.4894 14C11.7611 14 10.36 12.6009 10.36 10.875C10.36 9.14911 11.7611 7.75 13.4894 7.75C15.2177 7.75 16.6189 9.14911 16.6189 10.875Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ProfileComponent;
