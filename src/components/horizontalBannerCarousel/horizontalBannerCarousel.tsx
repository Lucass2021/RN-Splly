import React, {useRef, useState} from "react";
import {Dimensions, Image, ImageProps, Pressable, View} from "react-native";
import Carousel, {ICarouselInstance} from "react-native-reanimated-carousel";
import TextComponent from "../text/text";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";
import {backgroundColors, Colors} from "@/theme/colors";

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

export type HorizontalBannerData = {
  primaryTagTitle: string;
  primaryTagColor: keyof typeof backgroundColors;
  secondaryTagTitle: string;
  secondaryTagColor: keyof typeof backgroundColors;
  image: ImageProps;
  title: string;
  subtitle: string;
  onPress: () => void;
};

type HorizontalBannerCarouselProps = {
  title: string;
  bannerList: HorizontalBannerData[];
};

export default function HorizontalBannerCarousel({
  title,
  bannerList,
}: HorizontalBannerCarouselProps) {
  const [currentBannerImage, setCurrentBannerImage] = useState(0);
  const ref = useRef<ICarouselInstance>(null);
  const bannerDemoImage = bannerList.map(item => item.image);

  const {height, width} = Dimensions.get("window");
  const imageHeight = height * 0.23;
  const imageWidth = width * 0.85;

  const backgroundColorPrimaryTag =
    Colors[bannerList[currentBannerImage].primaryTagColor];
  const backgroundColorSecondaryTag =
    Colors[bannerList[currentBannerImage].secondaryTagColor];

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
          // mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          renderItem={({item}) => (
            <View className="position-relative">
              <Image
                source={item}
                className="w-full rounded-2xl"
                style={{height: "100%"}}
                resizeMode="cover"
              />

              <View
                className={`absolute top-3 left-3 py-2 px-6 rounded-2xl`}
                style={{backgroundColor: backgroundColorPrimaryTag}}>
                <TextComponent
                  fontFamily="TTInterphases"
                  fontWeight="Bold"
                  color="light"
                  fontSize="overlay">
                  {bannerList[currentBannerImage].primaryTagTitle}
                </TextComponent>
              </View>

              <View
                className={`absolute bottom-3 right-3 py-2 px-6 rounded-2xl`}
                style={{backgroundColor: backgroundColorSecondaryTag}}>
                <TextComponent
                  fontFamily="Obviously"
                  fontWeight="SemiBold"
                  color="light"
                  fontSize="overlay">
                  {bannerList[currentBannerImage].secondaryTagTitle}
                </TextComponent>
              </View>

              <View className={`absolute bottom-[20.5%] left-3 w-8/12`}>
                <TextComponent
                  fontFamily="Obviously"
                  fontWeight="SemiBold"
                  color="lightOne"
                  fontSize="h4">
                  {bannerList[currentBannerImage].title}
                </TextComponent>
                <TextComponent
                  fontFamily="Obviously"
                  fontWeight="Medium"
                  color="lightOne"
                  fontSize="subtitleTwo">
                  {bannerList[currentBannerImage].subtitle}
                </TextComponent>
              </View>
            </View>
          )}
        />
      </Pressable>

      <View className="flex-row gap-2 justify-center mt-2.5 pr-7.5">
        {Array.from({length: bannerList.length}).map((_, index) => (
          <View
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentBannerImage ? "bg-secondaryVariantThree" : "bg-grayFive"}`}
          />
        ))}
      </View>
    </>
  );
}
