import AddressAndNotificationHeader from "@/components/addressAndNotificationHeader/addressAndNotificationHeader";
import BackButtonHeader from "@/components/backButtonHeader/backButtonHeader";
import {View} from "react-native";

export default function FilterScreen() {
  return (
    <View className="flex-1 px-7.5 pt-13 bg-light">
      <BackButtonHeader title="Filtros" customClassName="mb-7" />
      <View className="mb-4">
        <AddressAndNotificationHeader showNotificationBell={false} />
      </View>
    </View>
  );
}
