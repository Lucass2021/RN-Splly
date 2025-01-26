import ArrowButtonSlider from "@/components/arrowButtonSlider/arrowButtonSlider";
import {Dimensions, Image, Text, View} from "react-native";

export default function Slider() {
  const bannerDemoImage = require("../../src/assets/images/auth-demo.jpg");
  const {height} = Dimensions.get("window");
  const imageHeight = height * 0.4;

  return (
    <View className="flex-1 px-7.5 justify-center">
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
        <ArrowButtonSlider sliderInfo={{currentSlide: 1, totalSlides: 3}} />
      </View>
    </View>
  );
}
