import {backgroundColors, Colors} from "@/theme/colors";
import React, {useRef, useState} from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Pressable,
  View,
} from "react-native";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";
import Carousel, {ICarouselInstance} from "react-native-reanimated-carousel";
import {ImageProps} from "react-native-svg";
import TextComponent from "../text/text";

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

export type BannerCarouselData = {
  primaryTagTitle?: string | null;
  primaryTagBackroundColor?: keyof typeof backgroundColors | null;
  primaryTagTextColor?: keyof typeof backgroundColors | null;
  image: ImageProps;
  onPress: () => void;
};

type BannerCarouselCarouselProps = {
  title: string;
  bannerList: BannerCarouselData[];
};

export default function BannerCarousel({
  title,
  bannerList,
}: BannerCarouselCarouselProps) {
  const [currentBannerImage, setCurrentBannerImage] = useState(0);
  const ref = useRef<ICarouselInstance>(null);
  const bannerDemoImage = bannerList.map(item => item.image);

  const {height, width} = Dimensions.get("window");
  const imageHeight = height * 0.3;
  const imageWidth = width * 0.85;

  const hasPrimaryTag =
    bannerList[currentBannerImage].primaryTagBackroundColor &&
    bannerList[currentBannerImage].primaryTagTitle &&
    bannerList[currentBannerImage].primaryTagTextColor;

  const primaryTagBackroundColor =
    bannerList[currentBannerImage].primaryTagBackroundColor;

  const backgroundColorPrimaryTag =
    primaryTagBackroundColor !== null && primaryTagBackroundColor !== undefined
      ? Colors[primaryTagBackroundColor]
      : Colors.accent;

  const primaryTextColor = bannerList[currentBannerImage].primaryTagTextColor;

  const primaryTagTextColor =
    primaryTextColor !== null && primaryTextColor !== undefined
      ? primaryTextColor
      : "light";

  const handleBannerOnPress = () => {
    const currentBanner = bannerList[currentBannerImage];
    if (currentBanner && currentBanner.onPress) {
      currentBanner.onPress();
    }
  };

  return (
    <>
      <TextComponent
        fontFamily="Obviously"
        fontWeight="SemiBold"
        color="dark"
        fontSize="h6"
        customClassName="mb-5">
        {title}
      </TextComponent>

      <Pressable onPress={handleBannerOnPress}>
        <Carousel
          ref={ref}
          data={bannerDemoImage}
          width={imageWidth}
          height={imageHeight}
          onProgressChange={(offsetProgress, absoluteProgress) => {
            const roundedProgress = Math.round(absoluteProgress);
            if (roundedProgress === bannerDemoImage.length) {
              setCurrentBannerImage(0);
            } else {
              setCurrentBannerImage(roundedProgress);
            }
          }}
          autoPlay
          autoPlayInterval={3000}
          loop={true}
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          renderItem={({item}) => (
            <View className="position-relative">
              <Image
                source={item as ImageSourcePropType}
                className="w-full rounded-2xl"
                style={{height: "100%"}}
                resizeMode="cover"
              />

              {hasPrimaryTag && (
                <View
                  className={`absolute top-3 left-3 py-1 px-5 rounded-2xl`}
                  style={{
                    backgroundColor: backgroundColorPrimaryTag,
                  }}>
                  <TextComponent
                    fontFamily="TTInterphases"
                    fontWeight="Bold"
                    color={primaryTagTextColor}
                    fontSize="overlay">
                    {bannerList[currentBannerImage].primaryTagTitle}
                  </TextComponent>
                </View>
              )}
            </View>
          )}
        />
      </Pressable>

      <View className="flex-row gap-2.5 justify-center mt-2.5 pr-7.5">
        {Array.from({length: bannerList.length}).map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentBannerImage ? "bg-secondaryVariantThree" : "bg-grayFive"}`}
          />
        ))}
      </View>
    </>
  );
}
