import ArrowLeftComponent from "@/assets/icons/arrowLeft";
import ArrowRightComponent from "@/assets/icons/arrowRight";
import {Colors} from "@/colors/colors";
import {TouchableOpacity, View} from "react-native";

type ArrowButtonSliderProps = {
  sliderInfo: {
    currentSlide: number;
    totalSlides: number;
  };
  onPressNextImage: () => void;
  onPressPrevImage: () => void;
};

export default function ArrowButtonSlider({
  sliderInfo,
  onPressNextImage,
  onPressPrevImage,
}: ArrowButtonSliderProps) {
  const buttonStyle = "h-16 w-16 rounded-2xl items-center justify-center pt-2";
  const activeButtonStyle = "bg-secondaryVariantOne";
  const disabledButtonStyle = "bg-transparent border border-grayFour";

  const activeIconColor = Colors.lightOne;
  const disabledIconColor = Colors.grayFour;

  return (
    <View className="flex-row justify-between items-center">
      {sliderInfo.currentSlide > 1 ? (
        <TouchableOpacity
          className={`${buttonStyle} ${sliderInfo.currentSlide > 1 ? activeButtonStyle : disabledButtonStyle}`}
          activeOpacity={0.7}
          onPress={onPressPrevImage}
          disabled={sliderInfo.currentSlide === 1}>
          <ArrowLeftComponent
            color={
              sliderInfo.currentSlide > 1 ? activeIconColor : disabledIconColor
            }
            width={50}
            height={25}
          />
        </TouchableOpacity>
      ) : (
        <View className="w-13 h-6.5" />
      )}

      <View className="flex-row gap-2">
        {Array.from({length: sliderInfo.totalSlides}).map((_, index) => (
          <View
            key={index}
            className={`h-3 w-3 rounded-full ${index === sliderInfo.currentSlide - 1 ? "bg-secondaryVariantThree" : "bg-grayFive"}`}
          />
        ))}
      </View>

      <TouchableOpacity
        className={`${buttonStyle} ${activeButtonStyle}`}
        activeOpacity={0.7}
        onPress={onPressNextImage}>
        <ArrowRightComponent color={activeIconColor} width={50} height={25} />
      </TouchableOpacity>
    </View>
  );
}
