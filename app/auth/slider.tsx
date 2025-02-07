import ArrowButtonSlider from "@/components/arrowButtonSlider/arrowButtonSlider";
import TextComponent from "@/components/text/text";
import {router} from "expo-router";
import {useState} from "react";
import {Dimensions, Image, View} from "react-native";

export default function Slider() {
  const [currentBannerImage, setCurrentBannerImage] = useState(0);

  const {height} = Dimensions.get("window");
  const imageHeight = height * 0.4;

  const sliderImages = [
    require("../../src/assets/images/slider-demo-100kb-1.jpg"),
    require("../../src/assets/images/slider-demo-100kb-2.jpg"),
    require("../../src/assets/images/slider-demo-100kb-3.jpg"),
  ];

  const bannerDemoImage = sliderImages[currentBannerImage];

  const handlePrevSliderImage = () => {
    if (currentBannerImage > 0) {
      setCurrentBannerImage(currentBannerImage - 1);
    }
  };

  const handleNextSliderImage = () => {
    if (currentBannerImage < sliderImages.length - 1) {
      setCurrentBannerImage(currentBannerImage + 1);
    }

    if (currentBannerImage + 1 === sliderImages.length) {
      router.replace("/auth/sign-up");
    }
  };

  return (
    <View className="flex-1 px-7.5 justify-center bg-light">
      <View className="rounded-2xl">
        <Image
          source={bannerDemoImage}
          className="w-full rounded-2xl"
          style={{height: imageHeight}}
          resizeMode="cover"
        />
      </View>

      <View className="mt-10 mb-5">
        <TextComponent
          fontFamily="Obviously"
          fontWeight="Regular"
          color="darkOne"
          fontSize="h3"
          customClassName="text-center">
          Conheça{" "}
          <TextComponent
            fontFamily="Obviously"
            fontWeight="SemiBold"
            color="warningOne"
            fontSize="h3">
            salões próximos
          </TextComponent>{" "}
          de você
        </TextComponent>
      </View>

      <View className="mb-11">
        <TextComponent
          fontFamily="TTInterphases"
          fontWeight="Medium"
          color="grayOne"
          fontSize="subtitleOne"
          customClassName="text-center">
          Lorem ipsum potenti orci suspendisse aliquam nullam ornare dictumst
          id, dictumst risus viverra.
        </TextComponent>
      </View>

      <View>
        <ArrowButtonSlider
          sliderInfo={{
            currentSlide: currentBannerImage + 1,
            totalSlides: sliderImages.length,
          }}
          onPressNextImage={handleNextSliderImage}
          onPressPrevImage={handlePrevSliderImage}
        />
      </View>
    </View>
  );
}
