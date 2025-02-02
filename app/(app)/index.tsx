import AddressAndNotificationHeader from "@/components/addressAndNotificationHeader/addressAndNotificationHeader";
import HomeHeader from "@/components/homeHeader/homeHeader";
import {ScrollView, View} from "react-native";

export default function Index() {
  return (
    <ScrollView
      className="flex-1 px-7.5 pt-13 bg-light"
      showsVerticalScrollIndicator={false}>
      <View className="mb-4">
        <AddressAndNotificationHeader />
      </View>
      <HomeHeader onPress={() => {}} />
    </ScrollView>
  );
}
