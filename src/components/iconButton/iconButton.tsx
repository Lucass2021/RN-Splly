import ArrowDownComponent from "@/assets/icons/arrowDown";
import ArrowLeftComponent from "@/assets/icons/arrowLeft";
import ArrowRightComponent from "@/assets/icons/arrowRight";
import BellComponent from "@/assets/icons/bell";
import ExploreComponent from "@/assets/icons/explore";
import HomeComponent from "@/assets/icons/home";
import LocationPinComponent from "@/assets/icons/locationPin";
import ProfileComponent from "@/assets/icons/profile";
import ScheduleComponent from "@/assets/icons/schedule";
import {backgroundColors, Colors} from "@/colors/colors";
import {TouchableOpacity} from "react-native";

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
};

type IconName = keyof typeof iconRegistry;

type IconButtonProps = {
  iconName: IconName;
  iconColor: keyof typeof Colors;
  buttonBackgroundColor: keyof typeof backgroundColors;
  iconWidth: number;
  iconHeight: number;
  disabled?: boolean;
  onPress?: () => void;
};

export default function IconButton({
  iconName,
  iconColor,
  buttonBackgroundColor,
  iconWidth,
  iconHeight,
  disabled = false,
  onPress,
}: IconButtonProps) {
  const IconComponent = iconRegistry[iconName];
  const color = Colors[iconColor];
  const backgroundColor = backgroundColors[buttonBackgroundColor];

  return (
    <TouchableOpacity
      className={`h-16 w-16 rounded-2xl items-center justify-center pt-2 ${backgroundColor}`}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}>
      <IconComponent color={color} width={iconWidth} height={iconHeight} />
    </TouchableOpacity>
  );
}
