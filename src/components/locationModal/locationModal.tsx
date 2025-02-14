import ArrowDownComponent from "@/assets/icons/arrowDown";
import TargetComponent from "@/assets/icons/target";
import {Colors} from "@/theme/colors";
import React, {useState} from "react";
import {Pressable, View} from "react-native";
import Modal from "react-native-modal";
import ButtonWithIcon from "../buttonWithIcon/buttonWithIcon";
import LocationCard from "../locationCard/locationCard";
import SearchBar from "../searchBar/searchBar";
import TextComponent from "../text/text";
import {iconRegistry} from "@/theme/icons";

type LocationModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

export default function LocationModal({
  isVisible,
  onClose,
}: LocationModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [currentDefaultLocation, setCurrentDefaultLocation] = useState("Casa");

  const userLocationData = {
    defaultLocation: currentDefaultLocation,
    locations: [
      {
        name: "Casa",
        location: "R. Dezenove de Novembro - São Jorge - Novo Hamburgo",
        iconName: "home" as keyof typeof iconRegistry,
      },
      {
        name: "Trabalho",
        location:
          "R. Frederico da Silva Júnior - Alegretense - Santa Cruz do Sul",
        iconName: "home" as keyof typeof iconRegistry,
      },
    ],
  };

  const customShadow = {
    shadowColor: "#0000000D", // Android and IOS
    shadowOffset: {width: 0, height: 20}, // IOS Only
    shadowOpacity: 0.05, // IOS Only
    shadowRadius: 10.3 / 2, // IOS Only
    elevation: 5, // Android only
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  return (
    <Modal
      isVisible={isVisible && !isClosing}
      onSwipeComplete={handleClose}
      onBackdropPress={handleClose}
      swipeDirection="down"
      backdropOpacity={0.01}
      useNativeDriver={true}
      animationOut="slideOutDown"
      animationIn="slideInUp"
      animationOutTiming={300}
      animationInTiming={300}
      className="bg-transparent"
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}>
      <View className="bg-light rounded-t-20 h-[90%]" style={customShadow}>
        <View className="px-7.5">
          <Pressable
            className="flex-row justify-between items-center pt-2.5"
            onPress={handleClose}>
            <ArrowDownComponent
              color={Colors.secondaryVariantOne}
              width={20}
              height={8}
            />

            <TextComponent
              fontFamily="TTInterphases"
              fontWeight="Bold"
              color="dark"
              fontSize="h5">
              Endereço
            </TextComponent>

            <View className="w-5 h-2" />
          </Pressable>

          <View className="mt-3.8">
            <SearchBar placeholder="Buscar endereço e número" />

            <Pressable className="mt-4 flex-row items-center px-5">
              <TargetComponent
                color={Colors.grayThree}
                width={25}
                height={25}
              />
              <View className="ml-3.5">
                <TextComponent
                  fontFamily="TTInterphases"
                  fontWeight="Medium"
                  color="dark"
                  fontSize="subtitleOne">
                  Usar minha localização
                </TextComponent>
                <TextComponent
                  fontFamily="TTInterphases"
                  fontWeight="Medium"
                  color="grayFour"
                  fontSize="subtitleTwo">
                  R. Dezenove de Novembro - São Jorge - Novo Hamburgo
                </TextComponent>
              </View>
            </Pressable>
          </View>
        </View>

        <View className="flex-1 bg-lightThree mt-5 pt-2.5 px-7.5 rounded-t-20">
          {userLocationData.locations.map((location, index) => (
            <LocationCard
              key={index}
              name={location.name}
              location={location.location}
              iconName={location.iconName}
              defaultLocation={userLocationData.defaultLocation}
              onPress={() => setCurrentDefaultLocation(location.name)}
            />
          ))}

          <ButtonWithIcon
            text="Adicionar Localização"
            customFontWeight="Medium"
            onPress={() => {}}
            iconName="plus"
            iconColor="lightOne"
            iconHeight={20}
            iconWidth={20}
            customClassName="mt-2.5"
          />
        </View>
      </View>
    </Modal>
  );
}
