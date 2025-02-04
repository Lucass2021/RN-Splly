import sliderDemo1 from "@/assets/images/slider-demo-100kb-1.jpg";
import sliderDemo2 from "@/assets/images/slider-demo-100kb-2.jpg";
import AddressAndNotificationHeader from "@/components/addressAndNotificationHeader/addressAndNotificationHeader";
import HomeHeader from "@/components/homeHeader/homeHeader";
import HorizontalBannerCarousel, {
  HorizontalBannerData,
} from "@/components/horizontalBannerCarousel/horizontalBannerCarousel";
import {ScrollView, View} from "react-native";

export default function Index() {
  const bannerListData: HorizontalBannerData[] = [
    {
      primaryTagTitle: "Acaba logo!",
      primaryTagColor: "accentOne",
      secondaryTagTitle: "Resgatar",
      secondaryTagColor: "secondaryVariantOne",
      image: sliderDemo1,
    },
    {
      primaryTagTitle: "Promoção agora!",
      primaryTagColor: "warningOne",
      secondaryTagTitle: "Comprar",
      secondaryTagColor: "confirm",
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
