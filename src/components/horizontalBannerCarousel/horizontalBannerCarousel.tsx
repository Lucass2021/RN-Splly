import {useState} from "react";
import {Dimensions, Image, ImageProps, ScrollView, View} from "react-native";
import TextComponent from "../text/text";
import React from "react";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentBannerImage, setCurrentBannerImage] = useState(0);
  const bannerDemoImage = bannerList[currentBannerImage].image;

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

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          className="rounded-2xl"
          style={{width: imageWidth, height: imageHeight}}>
          <Image
            source={bannerDemoImage}
            className="w-full rounded-2xl"
            style={{height: "100%"}}
            resizeMode="cover"
          />
        </View>
      </ScrollView>

      <View className="flex-row gap-2">
        {Array.from({length: bannerList.length}).map((_, index) => (
          <View
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentBannerImage - 1 ? "bg-secondaryVariantThree" : "bg-grayFive"}`}
          />
        ))}
      </View>
    </>
  );
}
