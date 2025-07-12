import {useState} from "react";
import {View} from "react-native";
import Modal from "react-native-modal";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Button from "../button/button";
import TextComponent from "../text/text";

type BottomModalProps = {
  isVisible: boolean;
  onClose: () => void;
  text: string;
  actionButtonText: string;
  actionButton: () => void;
  cancelButtonText: string;
};

export const BottomModal = ({
  isVisible,
  onClose,
  text,
  actionButtonText,
  actionButton,
  cancelButtonText,
}: BottomModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const insets = useSafeAreaInsets();

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
        className="py-6 px-7.5"
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
        <TextComponent
          fontFamily="Obviously"
          fontWeight="SemiBold"
          color="darkOne"
          fontSize="h3"
          customClassName="text-center">
          {text}
        </TextComponent>

        <View className="border-t border-grayNine my-7" />

        <View className="flex-row justify-between gap-x-5">
          <Button
            text={actionButtonText}
            onPress={() => handleClose()}
            customClassName="flex-1"
          />
          <Button
            text={cancelButtonText}
            onPress={() => actionButton()}
            customBackgroundColor="transparent"
            customTextColor="grayTwo"
            customClassName="flex-1 border border-grayTwo"
            customBackgroundOnPressColor="transparent"
          />
        </View>
      </View>
    </Modal>
  );
};
