import {View} from "react-native";
import IconButton from "../iconButton/iconButton";

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
  return (
    <View className="flex-row justify-between items-center">
      {sliderInfo.currentSlide > 1 ? (
        <IconButton
          iconName="arrowLeft"
          iconColor="lightOne"
          buttonBackgroundColor="secondaryVariantOne"
          iconWidth={50}
          iconHeight={25}
          disabled={sliderInfo.currentSlide === 1}
          onPress={onPressPrevImage}
        />
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
      <IconButton
        iconName="arrowRight"
        iconColor="lightOne"
        buttonBackgroundColor="secondaryVariantOne"
        iconWidth={50}
        iconHeight={25}
        onPress={onPressNextImage}
      />
    </View>
  );
}
