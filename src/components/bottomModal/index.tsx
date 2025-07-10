/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from "react";
import {Text, View} from "react-native";
import Modal from "react-native-modal";
import {useSafeAreaInsets} from "react-native-safe-area-context";

type BottomModalProps = {
  isVisible: boolean;
  onClose: () => void;
  text: string;
  actionButtonText: string;
  cancelButtonText: string;
};

export const BottomModal = ({
  isVisible,
  onClose,
  text,
  actionButtonText,
  cancelButtonText,
}: BottomModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const insets = useSafeAreaInsets(); // Isso vai nos dar as áreas seguras do dispositivo

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const customShadow = {
    shadowColor: "#0000000D",
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.05,
    shadowRadius: 10.3 / 2,
    elevation: 5,
  };

  return (
    <Modal
      isVisible={isVisible && !isClosing}
      onBackdropPress={handleClose}
      swipeDirection="down"
      onSwipeComplete={handleClose}
      backdropOpacity={0.5}
      useNativeDriver={true}
      animationOut="slideOutDown"
      animationIn="slideInUp"
      animationOutTiming={500}
      animationInTiming={500}
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
      avoidKeyboard={true}
      coverScreen={true}>
      <View
        style={[
          customShadow,
          {
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingBottom: insets.bottom,
            height: "30%",
            width: "100%",
          },
        ]}>
        <Text>Modal</Text>
      </View>
    </Modal>
  );
};
