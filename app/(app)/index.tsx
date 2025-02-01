import AddressAndNotificationHeader from "@/components/addressAndNotificationHeader/addressAndNotificationHeader";
import TextComponent from "@/components/text/text";
import {ScrollView} from "react-native";

export default function Index() {
  return (
    <ScrollView
      className="flex-1 px-7.5 pt-13 bg-light"
      showsVerticalScrollIndicator={false}>
      <AddressAndNotificationHeader />

      <TextComponent
        text="Teste"
        color="secondaryVariantOne"
        fontFamily="Obviously"
        fontWeight="Bold"
        fontSize="h3"
      />
    </ScrollView>
  );
}
