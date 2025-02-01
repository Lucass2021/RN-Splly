import ArrowDownComponent from "@/assets/icons/arrowDown";
import LocationPinComponent from "@/assets/icons/locationPin";
import {Pressable, Text, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import IconButton from "../iconButton/iconButton";

export default function AddressAndNotificationHeader() {
  return (
    <View>
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="font-TTInterphasesLight text-base color-grayTwo">
            Localização
          </Text>
          <Pressable className="flex-row items-center gap-2.5">
            <LocationPinComponent
              width={22}
              height={24}
              color={Colors.secondaryVariantThree}
            />
            <Text className="font-obviouslyBold text-lg">São Jorge, NH</Text>
            <ArrowDownComponent
              color={Colors.primaryVariantOne}
              width={10}
              height={40}
            />
          </Pressable>
        </View>

        <IconButton
          iconName="bell"
          iconColor="primaryVariantOne"
          buttonBackgroundColor="grayFive"
          iconWidth={24}
          iconHeight={24}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}
