import {Colors} from "@/theme/colors";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, {useState} from "react";
import {Dimensions, View} from "react-native";
import TextComponent from "../text/text";

type RangeInputProps = {
  title: string;
  onInteractionStart?: () => void;
  onInteractionEnd?: () => void;
};

export default function RangeInput({
  title,
  onInteractionStart,
  onInteractionEnd,
}: RangeInputProps) {
  const [values, setValues] = useState([5, 80]);

  const {width} = Dimensions.get("window");

  const handleValuesChange = (newValues: number[]) => {
    setValues(newValues);
  };

  const steps = [5, 20, 40, 60, 80];

  const snapToStep = (value: number) => {
    return steps.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    });
  };

  const handleSlidingComplete = (newValues: number[]) => {
    if (onInteractionEnd) {
      onInteractionEnd();
    }
    const snappedValues = newValues.map(value => snapToStep(value));
    setValues(snappedValues);
  };

  console.log("Step Inicial", values[0]);
  console.log("Step Final", values[1]);

  return (
    <View>
      <View>
        <TextComponent
          fontFamily="TTInterphases"
          fontWeight="Medium"
          color="dark"
          fontSize="h5"
          customClassName="mb-3 ">
          {title}
        </TextComponent>
      </View>

      <View className="px-5">
        <MultiSlider
          values={values}
          sliderLength={width - 100}
          onValuesChangeStart={onInteractionStart}
          onValuesChangeFinish={handleSlidingComplete}
          onValuesChange={handleValuesChange}
          min={5}
          max={80}
          step={1}
          allowOverlap
          snapped
          containerStyle={{height: 50}}
          trackStyle={{
            height: 5,
            backgroundColor: Colors.grayEight,
          }}
          selectedStyle={{
            backgroundColor: Colors.secondaryVariantOne,
          }}
          markerStyle={{
            height: 33,
            width: 33,
            borderRadius: 15,
            backgroundColor: Colors.secondaryVariantOne,
            borderColor: "transparent",
            borderWidth: 2,
          }}
        />
      </View>
      <View className="flex-row justify-between px-1">
        {steps.map((step, index) => (
          <TextComponent
            fontFamily="TTInterphases"
            fontWeight="Regular"
            color="dark"
            fontSize="overlay"
            key={index}>
            {step === 80 ? `${step}km+` : `${step}km`}
          </TextComponent>
        ))}
      </View>
    </View>
  );
}
