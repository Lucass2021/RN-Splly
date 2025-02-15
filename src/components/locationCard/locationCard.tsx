import {iconRegistry} from "@/theme/icons";
import {Pressable, View} from "react-native";
import CustomIcon from "../customIcon/customIcon";
import TextComponent from "../text/text";

export type LocationCardProps = {
  name: string;
  location: string;
  iconName: keyof typeof iconRegistry;
  defaultLocation: string;
  onPress: () => void;
};

export default function LocationCard({
  name,
  iconName,
  location,
  defaultLocation,
  onPress,
}: LocationCardProps) {
  return (
    <Pressable
      className={`
    bg-light rounded-2xl flex-row items-center my-2.5 h-25 px-5 ${defaultLocation === name ? "border border-secondaryVariantOne" : ""}`}
      onPress={onPress}>
      <CustomIcon
        iconName={iconName}
        iconColor="grayThree"
        iconWidth={18}
        iconHeight={20}
      />

      <View className="ml-4">
        <TextComponent
          fontFamily="TTInterphases"
          fontWeight="Medium"
          color="dark"
          fontSize="subtitleOne"
          numberOfLines={2}
          ellipsizeMode="tail">
          {name}
        </TextComponent>

        <TextComponent
          fontFamily="TTInterphases"
          fontWeight="Medium"
          color="grayFour"
          fontSize="subtitleTwo"
          numberOfLines={2}
          ellipsizeMode="tail">
          {location}
        </TextComponent>
      </View>
    </Pressable>
  );
}
