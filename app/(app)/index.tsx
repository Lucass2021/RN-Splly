import AddressAndNotificationHeader from "@/components/addressAndNotificationHeader/addressAndNotificationHeader";
import HomeHeader from "@/components/homeHeader/homeHeader";
import HorizontalBannerCarousel, {
  HorizontalBannerData,
} from "@/components/horizontalBannerCarousel/horizontalBannerCarousel";
import {ScrollView, View} from "react-native";
import sliderDemo1 from "@/assets/images/slider-demo-100kb-1.jpg";
import sliderDemo2 from "@/assets/images/slider-demo-100kb-2.jpg";

export default function Index() {
  const bannerListData: HorizontalBannerData[] = [
    {
      primaryTagTitle: "Barbearia",
      primaryTagColor: "secondaryVariantOne",
      secondaryTagTitle: "Serviços",
      secondaryTagColor: "secondaryVariantTwo",
      image: sliderDemo1,
    },
    {
      primaryTagTitle: "Barbearia 2",
      primaryTagColor: "secondaryVariantOne",
      secondaryTagTitle: "Serviços 2",
      secondaryTagColor: "secondaryVariantTwo",
      image: sliderDemo2,
    },
  ];

  return (
    <ScrollView
      className="flex-1 pt-13 bg-light"
      showsVerticalScrollIndicator={false}>
      <View className="px-7.5">
        <View className="mb-4">
          <AddressAndNotificationHeader />
        </View>

        <View className="mb-7.5">
          <HomeHeader onPress={() => {}} />
        </View>
      </View>

      <View className="ps-7.5">
        <HorizontalBannerCarousel
          title="Feitos para você"
          bannerList={bannerListData}
        />
      </View>
    </ScrollView>
  );
}
