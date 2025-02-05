import sliderDemo1 from "@/assets/images/slider-demo-100kb-1.jpg";
import sliderDemo2 from "@/assets/images/slider-demo-100kb-2.jpg";
import menuCircleDemo from "@/assets/icons/menuCircleDemo.svg";
import AddressAndNotificationHeader from "@/components/addressAndNotificationHeader/addressAndNotificationHeader";
import HomeHeader from "@/components/homeHeader/homeHeader";
import HorizontalBannerCarousel, {
  HorizontalBannerData,
} from "@/components/horizontalBannerCarousel/horizontalBannerCarousel";
import MenuCircle, {MenuCircleProps} from "@/components/menuCircle/menuCircle";
import {ScrollView, View} from "react-native";

export default function Index() {
  const bannerListData: HorizontalBannerData[] = [
    {
      primaryTagTitle: "Acaba logo!",
      primaryTagColor: "accentOne",
      secondaryTagTitle: "Resgatar",
      secondaryTagColor: "secondaryVariantOne",
      title: "Promoção, até 40% OFF",
      subtitle: "Somente até as 14hrs.",
      image: sliderDemo1,
      onPress: () => console.log("Serviço 1"),
    },
    {
      primaryTagTitle: "Promoção agora!",
      primaryTagColor: "warningOne",
      secondaryTagTitle: "Comprar",
      secondaryTagColor: "grayOne",
      title: "Previsão de agora 🌦️",
      subtitle: "Tespestade de descontos!",
      image: sliderDemo2,
      onPress: () => console.log("Serviço 2"),
    },
  ];

  const MenuCircleData: MenuCircleProps = {
    title: "Serviços",
    list: [
      {
        name: "Cortes",
        image: menuCircleDemo,
        onPress: () => console.log("Cortes"),
      },
      {
        name: "Barba",
        image: menuCircleDemo,
        onPress: () => console.log("Barba"),
      },
      {
        name: "Massagem",
        image: menuCircleDemo,
        onPress: () => console.log("Massagem"),
      },
      {
        name: "Colorir",
        image: menuCircleDemo,
        onPress: () => console.log("Colorir"),
      },
      {
        name: "Lorem 1",
        image: menuCircleDemo,
        onPress: () => console.log("Lorem 1"),
      },
      {
        name: "Lorem 2",
        image: menuCircleDemo,
        onPress: () => console.log("Lorem 2"),
      },
      {
        name: "Lorem 3",
        image: menuCircleDemo,
        onPress: () => console.log("Lorem 3"),
      },
    ],
  };

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

      <View className="ps-7.5 mb-4">
        <HorizontalBannerCarousel
          title="Feitos para você"
          bannerList={bannerListData}
        />
      </View>

      <View className="ps-7.5">
        <MenuCircle title={MenuCircleData.title} list={MenuCircleData.list} />
      </View>
    </ScrollView>
  );
}
