import ArrowLeft from "@/assets/icons/arrow-left.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import {TouchableOpacity, View} from "react-native";

type ArrowButtonSliderProps = {
  sliderInfo: {
    currentSlide: number;
    totalSlides: number;
  };
};

export default function ArrowButtonSlider({
  sliderInfo,
}: ArrowButtonSliderProps) {
  const activeButtonStyle = "bg-secondaryVariantOne";
  const disabledButtonStyle = "bg-transparent border border-grayFour";
  const buttonStyle = "h-13 w-13 rounded-2xl items-center justify-center";

  return (
    <View className="flex-row justify-between items-center">
      <TouchableOpacity
        className={`${buttonStyle} ${disabledButtonStyle}`}
        activeOpacity={0.7}>
        <ArrowLeft />
      </TouchableOpacity>

      <View className="flex-row gap-2">
        {Array.from({length: sliderInfo.totalSlides}).map((_, index) => (
          <View
            key={index}
            className={`h-3 w-3 rounded-full ${index === sliderInfo.currentSlide - 1 ? "bg-secondaryVariantThree" : "bg-grayFour"}`}
          />
        ))}
      </View>

      <TouchableOpacity
        className={`${buttonStyle} ${activeButtonStyle}`}
        activeOpacity={0.7}>
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
}
