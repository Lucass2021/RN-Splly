import ArrowDownComponent from "@/assets/icons/arrowDown";
import LocationPinComponent from "@/assets/icons/locationPin";
import {Pressable, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import IconButton from "../iconButton/iconButton";
import TextComponent from "../text/text";

type AddressAndNotificationHeaderProps = {
  onPress?: () => void;
  showNotificationBell?: boolean;
  locationPinColor?: keyof typeof Colors;
};

export default function AddressAndNotificationHeader({
  onPress,
  showNotificationBell = true,
  locationPinColor = "secondaryVariantThree",
}: AddressAndNotificationHeaderProps) {
  const color = Colors[locationPinColor];
  return (
    <View>
      <View className="flex-row items-center justify-between">
        <View>
          <TextComponent
            fontFamily="TTInterphases"
            fontWeight="Light"
            color="grayTwo"
            fontSize="paragraphTwo">
            Localização
          </TextComponent>
          <Pressable className="flex-row items-center gap-2.5">
            <LocationPinComponent width={22} height={24} color={color} />
            <TextComponent
              fontFamily="Obviously"
              fontWeight="Bold"
              color="dark"
              fontSize="h6">
              São Jorge, NH
            </TextComponent>
            <ArrowDownComponent
              color={Colors.primaryVariantOne}
              width={10}
              height={40}
            />
          </Pressable>
        </View>

        {showNotificationBell && (
          <IconButton
            iconName="bell"
            iconColor="primaryVariantOne"
            buttonBackgroundColor="grayFive"
            iconWidth={24}
            iconHeight={24}
            onPress={onPress}
          />
        )}
      </View>
    </View>
  );
}
