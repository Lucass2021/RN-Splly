import React from "react";
import {Modal, Text, View} from "react-native";
import Button from "../button/button";

type LocationModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

export default function LocationModal({
  isVisible,
  onClose,
}: LocationModalProps) {
  return (
    // Fazer com que Modal ocupe 80% de altura
    // Fazer com que Modal seja swipeable
    // https://docs.expo.dev/router/advanced/modals/

    <Modal visible={isVisible} onRequestClose={() => onClose()} transparent>
      <View className="bg-red-500 flex-1">
        <Text>aaaaaaaaa1</Text>
        <Button text="Fechar" onPress={onClose} />
      </View>
    </Modal>
  );
}
