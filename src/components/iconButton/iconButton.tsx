import ArrowDownComponent from "@/assets/icons/arrowDown";
import ArrowLeftComponent from "@/assets/icons/arrowLeft";
import ArrowRightComponent from "@/assets/icons/arrowRight";
import BellComponent from "@/assets/icons/bell";
import ExploreComponent from "@/assets/icons/explore";
import FilterSearchComponent from "@/assets/icons/filterSearch";
import HomeComponent from "@/assets/icons/home";
import LocationPinComponent from "@/assets/icons/locationPin";
import ProfileComponent from "@/assets/icons/profile";
import ScheduleComponent from "@/assets/icons/schedule";
import {backgroundColors, Colors} from "@/theme/colors";
import {TouchableOpacity, TouchableOpacityProps} from "react-native";

const iconRegistry = {
  arrowLeft: ArrowLeftComponent,
  arrowRight: ArrowRightComponent,
  arrowDown: ArrowDownComponent,
  explore: ExploreComponent,
  home: HomeComponent,
  locationPin: LocationPinComponent,
  profile: ProfileComponent,
  schedule: ScheduleComponent,
  bell: BellComponent,
  filterSearch: FilterSearchComponent,
};

type IconName = keyof typeof iconRegistry;

export interface IconButtonProps extends TouchableOpacityProps {
  iconName: IconName;
  iconColor: keyof typeof Colors;
  buttonBackgroundColor: keyof typeof backgroundColors;
  iconWidth: number;
  iconHeight: number;
  disabled?: boolean;
  onPress?: () => void;
  customClassName?: string;
}

export default function IconButton({
  iconName,
  iconColor,
  buttonBackgroundColor,
  iconWidth,
  iconHeight,
  disabled = false,
  onPress,
  customClassName,
  ...props
}: IconButtonProps) {
  const IconComponent = iconRegistry[iconName];
  const color = Colors[iconColor];
  const backgroundColor = Colors[buttonBackgroundColor];

  return (
    <TouchableOpacity
      style={{backgroundColor: backgroundColor}}
      className={`h-16 w-16 rounded-2xl items-center justify-center ${customClassName}`}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      {...props}>
      <IconComponent color={color} width={iconWidth} height={iconHeight} />
    </TouchableOpacity>
  );
}
