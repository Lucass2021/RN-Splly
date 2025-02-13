import React, {useState} from "react";
import {Pressable, View} from "react-native";
import Modal from "react-native-modal";
import TextComponent from "../text/text";
import ArrowDownComponent from "@/assets/icons/arrowDown";
import {Colors} from "@/theme/colors";
import SearchBar from "../searchBar/searchBar";
import TargetComponent from "@/assets/icons/target";

type LocationModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

export default function LocationModal({
  isVisible,
  onClose,
}: LocationModalProps) {
  const [isClosing, setIsClosing] = useState(false);

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
      <View
        className="bg-light rounded-t-20 px-7.5 h-[90%]"
        style={customShadow}>
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

          <View className="mt-4 flex-row items-center gap-x-3.5 px-5">
            <TargetComponent color={Colors.grayThree} width={25} height={25} />
            <TextComponent
              fontFamily="TTInterphases"
              fontWeight="Medium"
              color="dark"
              fontSize="subtitleOne">
              Usar minha localização
            </TextComponent>
          </View>
        </View>
      </View>
    </Modal>
  );
}
