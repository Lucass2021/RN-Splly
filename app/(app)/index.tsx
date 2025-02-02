import AddressAndNotificationHeader from "@/components/addressAndNotificationHeader/addressAndNotificationHeader";
import {ScrollView} from "react-native";

export default function Index() {
  return (
    <ScrollView
      className="flex-1 px-7.5 pt-13 bg-light"
      showsVerticalScrollIndicator={false}>
      <AddressAndNotificationHeader />
    </ScrollView>
  );
}
