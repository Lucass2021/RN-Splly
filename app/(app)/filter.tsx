import AddressAndNotificationHeader from "@/components/addressAndNotificationHeader/addressAndNotificationHeader";
import BackButtonHeader from "@/components/backButtonHeader/backButtonHeader";
import FilterOptions, {
  FilterOptionsProps,
} from "@/components/filterOptions/filterOptions";
import {ScrollView, View} from "react-native";

export default function FilterScreen() {
  const filterOptionsData: FilterOptionsProps[] = [
    {
      title: "Serviços",
      buttonData: [
        {title: "Barba", onPress: () => console.log("Barba")},
        {title: "Cabelo", onPress: () => console.log("Cabelo")},
        {title: "Massagem", onPress: () => console.log("Massagem")},
        {title: "Sobrancelha", onPress: () => console.log("Sobrancelha")},
      ],
    },
    {
      title: "Público",
      buttonData: [
        {title: "Todos", onPress: () => console.log("Todos")},
        {title: "Masculino", onPress: () => console.log("Masculino")},
        {title: "Feminino", onPress: () => console.log("Feminino")},
      ],
    },
    {
      title: "Conhecer Estabelecimentos",
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
    <ScrollView className="flex-1 px-7.5 pt-13 bg-light">
      <BackButtonHeader title="Filtros" customClassName="mb-7" />
      <View className="mb-4">
        <AddressAndNotificationHeader
          showNotificationBell={false}
          locationPinColor="warningOne"
        />
      </View>

      {filterOptionsData.map((filterOption, index) => (
        <FilterOptions
          key={index}
          title={filterOption.title}
          buttonData={filterOption.buttonData}
        />
      ))}
    </ScrollView>
  );
}
