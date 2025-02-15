import ArrowDownComponent from "@/assets/icons/arrowDown";
import LocationPinComponent from "@/assets/icons/locationPin";
import {Pressable, View} from "react-native";
import IconButton from "../iconButton/iconButton";
import TextComponent from "../text/text";
import {Colors} from "@/theme/colors";
import LocationModal from "../locationModal/locationModal";
import {useState} from "react";
import {router} from "expo-router";

type NotificationHeaderProps = {
  showNotificationBell?: boolean;
  locationPinColor?: keyof typeof Colors;
};

export default function NotificationHeader({
  showNotificationBell = true,
  locationPinColor = "grayTwo",
}: NotificationHeaderProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const color = Colors[locationPinColor];

  const handleOpenLocationModal = () => {
    console.log("Open location modal");
    setIsModalVisible(true);
  };

  const handleCloseLocationModal = () => {
    console.log("Close location modal");
    setIsModalVisible(false);
  };

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
          <Pressable
            className="flex-row items-center gap-2.5"
            onPress={() => handleOpenLocationModal()}>
            <LocationPinComponent width={22} height={24} color={color} />
            <TextComponent
              fontFamily="Obviously"
              fontWeight="Bold"
              color="dark"
              fontSize="h6">
              Onde você está?
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
            onPress={() => router.push("/(app)/notification")}
          />
        )}
      </View>

      <LocationModal
        isVisible={isModalVisible}
        onClose={handleCloseLocationModal}
      />
    </View>
  );
}
