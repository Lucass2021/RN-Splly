import ArrowButtonSlider from "@/components/arrowButtonSlider/arrowButtonSlider";
import {router} from "expo-router";
import {useState} from "react";
import {Dimensions, Image, Text, View} from "react-native";

export default function Slider() {
  const [currentBannerImage, setCurrentBannerImage] = useState(0);

  const {height} = Dimensions.get("window");
  const imageHeight = height * 0.4;

  const sliderImages = [
    require("../../src/assets/images/auth-demo.jpg"),
    require("../../src/assets/images/auth-demo-2.jpg"),
    require("../../src/assets/images/auth-demo-3.jpg"),
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
    <View className="flex-1 px-7.5 justify-center bg-white">
      <View className="rounded-2xl">
        <Image
          source={bannerDemoImage}
          className="w-full rounded-2xl"
          style={{height: imageHeight}}
          resizeMode="cover"
        />
      </View>

      <View className="mt-10 mb-5">
        <Text className="font-obviouslyMedium text-2.5xl color-darkOne text-center">
          Conheça{" "}
          <Text className="font-obviouslyBold color-warningOne">
            salões próximos
          </Text>{" "}
          de você
        </Text>
      </View>

      <View className="mb-11">
        <Text className="font-TTInterphasesMedium  text-base text-center color-grayOne">
          Lorem ipsum potenti orci suspendisse aliquam nullam ornare dictumst
          id, dictumst risus viverra.
        </Text>
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
