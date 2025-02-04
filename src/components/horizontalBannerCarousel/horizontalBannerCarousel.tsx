import React, {useRef, useState} from "react";
import {Dimensions, Image, ImageProps, View} from "react-native";
import Carousel, {ICarouselInstance} from "react-native-reanimated-carousel";
import TextComponent from "../text/text";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

export type HorizontalBannerData = {
  primaryTagTitle: string;
  primaryTagColor: string;
  secondaryTagTitle: string;
  secondaryTagColor: string;
  image: ImageProps;
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
  const imageHeight = height * 0.2;
  const imageWidth = width * 0.85;

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

      <View>
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
            <Image
              source={item}
              className="w-full rounded-2xl"
              style={{height: "100%"}}
              resizeMode="cover"
            />
          )}
        />
      </View>

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
