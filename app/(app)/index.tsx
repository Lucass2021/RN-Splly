import menuCircleDemo from "@/assets/icons/menuCircleDemo.svg";
import sliderDemo1 from "@/assets/images/slider-demo-100kb-1.jpg";
import sliderDemo2 from "@/assets/images/slider-demo-100kb-2.jpg";
import highLightCardsDemo1 from "@/assets/images/highlight-card-1.jpg";
import highLightCardsDemo2 from "@/assets/images/highlight-card-2.jpg";
import highLightCardsDemo3 from "@/assets/images/highlight-card-3.jpg";
import highLightCardsDemo4 from "@/assets/images/highlight-card-4.jpg";
import highLightCardsDemo5 from "@/assets/images/highlight-card-5.jpg";
import AddressAndNotificationHeader from "@/components/addressAndNotificationHeader/addressAndNotificationHeader";
import HomeHeader from "@/components/homeHeader/homeHeader";

import BannerCarousel, {
  BannerCarouselData,
} from "@/components/bannerCarousel/bannerCarousel";
import HighlightCards, {
  HighlightCardsProps,
} from "@/components/highlightCards/highlightCards";
import MenuCircle, {MenuCircleProps} from "@/components/menuCircle/menuCircle";
import {ScrollView, View} from "react-native";

export default function Index() {
  const bannerListData: BannerCarouselData[] = [
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

  const HighlightCardsData: HighlightCardsProps = {
    title: "Mais avaliados",
    cardsData: [
      {
        title: "Corte + Barba",
        subtitle: "Barberia dos Galos",
        locationName: "Novo Hamburgo",
        discountPrice: "50,00",
        price: "75,00",
        onPress: () => console.log("Corte + Barba"),
        image: highLightCardsDemo1,
        isFavorite: false,
      },
      {
        title: "Barba",
        subtitle: "Old Style",
        locationName: "Säo Leopoldo",
        discountPrice: null,
        price: "35,00",
        onPress: () => console.log("Barba"),
        image: highLightCardsDemo2,
        isFavorite: true,
      },
      {
        title: "Corte Masculino",
        subtitle: "The Classic Barber",
        locationName: "Porto Alegre",
        discountPrice: "40,00",
        price: "60,00",
        onPress: () => console.log("Corte Masculino"),
        image: highLightCardsDemo3,
        isFavorite: false,
      },
      {
        title: "Sobrancelha",
        subtitle: "Estilo & Cia",
        locationName: "Canoas",
        discountPrice: "20,00",
        price: "30,00",
        onPress: () => console.log("Sobrancelha"),
        image: highLightCardsDemo4,
        isFavorite: true,
      },
      {
        title: "Corte + Hidratação",
        subtitle: null,
        locationName: "Esteio",
        discountPrice: null,
        price: "90,00",
        onPress: () => console.log("Corte + Hidratação"),
        image: highLightCardsDemo5,
        isFavorite: false,
      },
    ],
  };

  return (
    <ScrollView
      className="flex-1 pt-13 bg-light"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}>
      <View className="px-7.5">
        <View className="mb-4">
          <AddressAndNotificationHeader />
        </View>

        <View className="mb-7.5">
          <HomeHeader onPress={() => {}} />
        </View>
      </View>

      <View className="ps-7.5 mb-4">
        <BannerCarousel title="Feitos para você" bannerList={bannerListData} />
      </View>

      <View className="ps-7.5 mb-8">
        <MenuCircle title={MenuCircleData.title} list={MenuCircleData.list} />
      </View>

      <View className="ps-7.5">
        <HighlightCards
          title={HighlightCardsData.title}
          cardsData={HighlightCardsData.cardsData}
        />
      </View>
    </ScrollView>
  );
}
