import AddressAndNotificationHeader from "@/components/addressAndNotificationHeader/addressAndNotificationHeader";
import BackButtonHeader from "@/components/backButtonHeader/backButtonHeader";
import FilterOptions, {
  FilterOptionsProps,
} from "@/components/filterOptions/filterOptions";
import RangeInput from "@/components/rangeInput/rangeInput";
import {useState} from "react";
import {Platform, ScrollView, View} from "react-native";

export default function FilterScreen() {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const filterOptionsData: FilterOptionsProps[] = [
    {
      title: "Serviços",
      defaultSelected: "Barba",
      buttonData: [
        {title: "Barba", onPress: () => console.log("Barba")},
        {title: "Cortes", onPress: () => console.log("Cabelo")},
        {title: "Massagem", onPress: () => console.log("Massagem")},
        {title: "Sobrancelha", onPress: () => console.log("Sobrancelha")},
      ],
    },
    {
      title: "Público",
      defaultSelected: "Todos",
      buttonData: [
        {title: "Todos", onPress: () => console.log("Todos")},
        {title: "Masculino", onPress: () => console.log("Masculino")},
        {title: "Feminino", onPress: () => console.log("Feminino")},
      ],
    },
    {
      title: "Conhecer Estabelecimentos",
      defaultSelected: "Todos",
      buttonData: [
        {title: "Todos", onPress: () => console.log("Todos")},
        {
          title: "Melhores avaliados",
          onPress: () => console.log("Melhores avaliados"),
        },
      ],
    },
    {
      title: "Valor",
      defaultSelected: "Todos",
      buttonData: [
        {title: "Todos", onPress: () => console.log("Todos")},
        {title: "$$$$", onPress: () => console.log("$$$$")},
        {title: "$$$", onPress: () => console.log("$$$")},
        {title: "$$", onPress: () => console.log("$$")},
        {title: "$", onPress: () => console.log("$")},
      ],
    },
  ];

  return (
    <ScrollView
      className="flex-1 pt-13 bg-light"
      contentContainerStyle={{paddingBottom: Platform.OS === "ios" ? 50 : 100}}
      scrollEnabled={scrollEnabled}>
      <View className="px-7.5">
        <BackButtonHeader title="Filtros" customClassName="mb-7" />
        <View className="mb-4">
          <AddressAndNotificationHeader
            showNotificationBell={false}
            locationPinColor="warningOne"
          />
        </View>
      </View>

      {filterOptionsData.map((filterOption, index) => (
        <FilterOptions
          key={index}
          title={filterOption.title}
          buttonData={filterOption.buttonData}
          defaultSelected={filterOption.defaultSelected}
        />
      ))}

      <View className="px-7.5">
        <RangeInput
          title="Distância"
          onInteractionStart={() => setScrollEnabled(false)}
          onInteractionEnd={() => setScrollEnabled(true)}
        />
      </View>
    </ScrollView>
  );
}
