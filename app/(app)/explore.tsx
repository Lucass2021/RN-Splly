import menuCircleDemo from "@/assets/icons/menuCircleDemo.svg";
import highLightCardsDemo1 from "@/assets/images/highlight-card-1.jpg";
import highLightCardsDemo2 from "@/assets/images/highlight-card-2.jpg";
import highLightCardsDemo3 from "@/assets/images/highlight-card-3.jpg";
import highLightCardsDemo4 from "@/assets/images/highlight-card-4.jpg";
import highLightCardsDemo5 from "@/assets/images/highlight-card-5.jpg";
import {CardComponentProps} from "@/components/card/card";
import HighlightCards, {
  HighlightCardsProps,
} from "@/components/highlightCards/highlightCards";
import HomeSearchBar from "@/components/homeSearchBar/homeSearchBar";
import MenuCircle, {MenuCircleProps} from "@/components/menuCircle/menuCircle";
import {router} from "expo-router";
import {Platform, ScrollView, View} from "react-native";

export default function ExploreScreen() {
  const MenuCircleData: MenuCircleProps = {
    title: "Categorias",
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

  const HighlightCardsDataOne: HighlightCardsProps = {
    title: "Melhores barbearias",
    aboutOnPress: () => handleBarbetList(),
    cardsData: [
      {
        title: "Corte + Barba Corte",
        subtitle: "Barberia dos Galos",
        locationName: "Novo Hamburgo",
        discountPrice: "50,00",
        price: "75,00",
        onPress: () => console.log("Corte + Barba"),
        image: highLightCardsDemo1,
        isFavorite: false,
        rating: "4.9",
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
        rating: "4.5",
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
        rating: "3.9",
      },
      {
        title: "Especial Sobrancelha",
        subtitle: "Estilo é nosso mantra, cuidar dos nossos galos é o lance.",
        locationName: "Canoas",
        discountPrice: "20,00",
        price: "30,00",
        onPress: () => console.log("Sobrancelha"),
        image: highLightCardsDemo4,
        isFavorite: true,
        rating: "5.0",
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
        rating: "3.7",
      },
    ],
  };

  const HighlightCardsDataTwo: HighlightCardsProps = {
    title: "Mais vistos",
    aboutOnPress: () => console.log("Ver tudo - Mais vistos"),
    cardsData: [
      {
        title: "Corte + Barba Corte",
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
        title: "Especial Sobrancelha",
        subtitle: "Estilo é nosso mantra, cuidar dos nossos galos é o lance.",
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

  const BarberListData: CardComponentProps = {
    title: "Melhores barbearias",
    cardsData: [
      {
        title: "Corte + Barba Corte",
        subtitle: "Barberia dos Galos",
        locationName: "Novo Hamburgo",
        discountPrice: "50,00",
        price: "75,00",
        onPress: () => console.log("Corte + Barba"),
        image: highLightCardsDemo1,
        isFavorite: false,
        rating: "4.9",
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
        rating: "4.5",
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
        rating: "3.9",
      },
      {
        title: "Especial Sobrancelha",
        subtitle: "Estilo é nosso mantra, cuidar dos nossos galos é o lance.",
        locationName: "Canoas",
        discountPrice: "20,00",
        price: "30,00",
        onPress: () => console.log("Sobrancelha"),
        image: highLightCardsDemo4,
        isFavorite: true,
        rating: "5.0",
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
        rating: "3.7",
      },
    ],
  };

  const handleBarbetList = () => {
    // FETCH API DATA AND SEND REAL PARAMS
    router.push({
      pathname: "/(app)/barber-list",
      params: {data: JSON.stringify(BarberListData)},
    });
  };

  return (
    <ScrollView
      className="flex-1 pt-13 bg-light"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: Platform.OS === "ios" ? 20 : 100}}>
      <View className="px-7.5">
        <HomeSearchBar />
      </View>

      <View className="mt-5">
        <MenuCircle title={MenuCircleData.title} list={MenuCircleData.list} />
      </View>

      <View className="mt-8">
        <HighlightCards
          title={HighlightCardsDataOne.title}
          aboutOnPress={HighlightCardsDataOne.aboutOnPress}
          cardsData={HighlightCardsDataOne.cardsData}
        />
      </View>

      <View className="mt-8">
        <HighlightCards
          title={HighlightCardsDataTwo.title}
          aboutOnPress={HighlightCardsDataTwo.aboutOnPress}
          cardsData={HighlightCardsDataTwo.cardsData}
        />
      </View>
    </ScrollView>
  );
}
