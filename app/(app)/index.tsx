import menuCircleDemo from "@/assets/icons/menuCircleDemo.svg";
import highLightCardsDemo1 from "@/assets/images/highlight-card-1.jpg";
import highLightCardsDemo2 from "@/assets/images/highlight-card-2.jpg";
import highLightCardsDemo3 from "@/assets/images/highlight-card-3.jpg";
import highLightCardsDemo4 from "@/assets/images/highlight-card-4.jpg";
import highLightCardsDemo5 from "@/assets/images/highlight-card-5.jpg";

import BannerCarousel, {
  BannerCarouselData,
} from "@/components/bannerCarousel/bannerCarousel";
import HighlightCards, {
  HighlightCardsProps,
} from "@/components/highlightCards/highlightCards";
import HomeSearchBar from "@/components/homeSearchBar/homeSearchBar";
import MenuCircle, {MenuCircleProps} from "@/components/menuCircle/menuCircle";
import NotificationHeader from "@/components/notificationHeader/notificationHeader";
import {FC} from "react";
import {ImageProps, Platform, ScrollView, View} from "react-native";
import {SvgProps} from "react-native-svg";

export default function Index() {
  const bannerListData: BannerCarouselData[] = [
    {
      primaryTagTitle: "Acaba logo!",
      primaryTagBackroundColor: "accentOne",
      primaryTagTextColor: "light",
      image: highLightCardsDemo1 as ImageProps,
      onPress: () => console.log("Serviço 1"),
    },
    {
      primaryTagTitle: "Promoção agora!",
      primaryTagBackroundColor: "warningOne",
      primaryTagTextColor: "light",
      image: highLightCardsDemo2 as ImageProps,
      onPress: () => console.log("Serviço 2"),
    },
    {
      primaryTagTitle: "Último dia!",
      primaryTagBackroundColor: "accentOne",
      primaryTagTextColor: "light",
      image: highLightCardsDemo3 as ImageProps,
      onPress: () => console.log("Serviço 3"),
    },
  ];

  const MenuCircleData: MenuCircleProps = {
    title: "Serviços",
    list: [
      {
        name: "Cortes",
        image: menuCircleDemo as FC<SvgProps>,
        onPress: () => console.log("Cortes"),
      },
      {
        name: "Barba",
        image: menuCircleDemo as FC<SvgProps>,
        onPress: () => console.log("Barba"),
      },
      {
        name: "Massagem",
        image: menuCircleDemo as FC<SvgProps>,
        onPress: () => console.log("Massagem"),
      },
      {
        name: "Colorir",
        image: menuCircleDemo as FC<SvgProps>,
        onPress: () => console.log("Colorir"),
      },
      {
        name: "Lorem 1",
        image: menuCircleDemo as FC<SvgProps>,
        onPress: () => console.log("Lorem 1"),
      },
      {
        name: "Lorem 2",
        image: menuCircleDemo as FC<SvgProps>,
        onPress: () => console.log("Lorem 2"),
      },
      {
        name: "Lorem 3",
        image: menuCircleDemo as FC<SvgProps>,
        onPress: () => console.log("Lorem 3"),
      },
    ],
  };

  const HighlightCardsData: HighlightCardsProps = {
    title: "Mais avaliados",
    aboutOnPress: () => console.log("Ver tudo - Mais avaliados"),
    cardsData: [
      {
        title: "Corte + Barba Corte",
        subtitle: "Barberia dos Galos",
        locationName: "Novo Hamburgo",
        discountPrice: "50,00",
        price: "75,00",
        onPress: () => console.log("Corte + Barba"),
        image: highLightCardsDemo1 as ImageProps,
        isFavorite: false,
      },
      {
        title: "Barba",
        subtitle: "Old Style",
        locationName: "Säo Leopoldo",
        discountPrice: null,
        price: "35,00",
        onPress: () => console.log("Barba"),
        image: highLightCardsDemo2 as ImageProps,
        isFavorite: true,
      },
      {
        title: "Corte Masculino",
        subtitle: "The Classic Barber",
        locationName: "Porto Alegre",
        discountPrice: "40,00",
        price: "60,00",
        onPress: () => console.log("Corte Masculino"),
        image: highLightCardsDemo3 as ImageProps,
        isFavorite: false,
      },
      {
        title:
          "Especial Sobrancelha dos galos & Barba dos crias super especial.",
        subtitle:
          "Estilo é nosso mantra, cuidar dos nossos galos é o lance. Sobrancelha dos galos & Barba dos crias super especial.",
        locationName: "Canoas",
        discountPrice: "20,00",
        price: "30,00",
        onPress: () => console.log("Sobrancelha"),
        image: highLightCardsDemo4 as ImageProps,
        isFavorite: true,
      },
      {
        title: "Corte + Hidratação",
        subtitle: null,
        locationName: "Esteio",
        discountPrice: null,
        price: "90,00",
        onPress: () => console.log("Corte + Hidratação"),
        image: highLightCardsDemo5 as ImageProps,
        isFavorite: false,
      },
    ],
  };

  return (
    <ScrollView
      className="flex-1 pt-13 bg-light"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: Platform.OS === "ios" ? 20 : 100}}>
      <View className="px-7.5">
        <View className="mb-4">
          <NotificationHeader />
        </View>

        <View className="mb-7.5">
          <HomeSearchBar />
        </View>
      </View>

      <View className="ps-7.5 mb-4">
        <BannerCarousel title="Feitos para você" bannerList={bannerListData} />
      </View>

      <View className="mb-8">
        <MenuCircle title={MenuCircleData.title} list={MenuCircleData.list} />
      </View>

      <HighlightCards
        title={HighlightCardsData.title}
        aboutOnPress={HighlightCardsData.aboutOnPress}
        cardsData={HighlightCardsData.cardsData}
      />
    </ScrollView>
  );
}
