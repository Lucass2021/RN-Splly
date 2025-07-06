import React from "react";
import Svg, {Path} from "react-native-svg";

type EditPencilProps = {
  color?: string;
  width?: number;
  height?: number;
};

export const EditPencilComponent = ({
  color = "black",
  width = 20,
  height = 20,
}: EditPencilProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <Path
        d="M13.1299 2.09818L14.0539 1.17419C14.8194 0.408734 16.0605 0.408734 16.8259 1.17419C17.5913 1.93965 17.5913 3.1807 16.8259 3.94616L15.9019 4.87015M13.1299 2.09818L6.91453 8.31354C6.44085 8.7873 6.10482 9.38071 5.94236 10.0306L5.26665 12.7334L7.96949 12.0577C8.61937 11.8953 9.21279 11.5592 9.68655 11.0855L15.9019 4.87015M13.1299 2.09818L15.9019 4.87015M15.5332 10.4001C15.5332 13.4684 15.5332 15.0025 14.6859 16.0352C14.5307 16.2242 14.3574 16.3975 14.1683 16.5526C13.1358 17.4001 11.6016 17.4001 8.53323 17.4001H8.06665C4.54682 17.4001 2.78693 17.4001 1.69346 16.3066C0.600003 15.2132 0.599976 13.4532 0.599976 9.93343V9.46676C0.599976 6.39845 0.599976 4.8643 1.44739 3.83171C1.60254 3.64267 1.77588 3.46932 1.96492 3.31417C2.99752 2.46676 4.53167 2.46676 7.59999 2.46676"
        stroke={color}
        strokeWidth="1.12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EditPencilComponent;
