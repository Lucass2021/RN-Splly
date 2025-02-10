import React from "react";
import {View, Text, StyleSheet} from "react-native";
import RangeSlider from "rn-range-slider";

export default function RangeInput() {
  const handleValueChange = (low: number, high: number) => {
    console.log(`Valor mínimo: ${low}, Valor máximo: ${high}`);
  };

  const renderThumb = () => <View style={styles.thumb} />;
  const renderRail = () => <View style={styles.rail} />;
  const renderRailSelected = () => <View style={styles.railSelected} />;
  const renderLabel = (value: number) => (
    <View style={styles.label}>
      <Text style={{color: "white"}}>{value}</Text>
    </View>
  );
  const renderNotch = () => <View style={styles.notch} />;

  return (
    <RangeSlider
      style={styles.slider}
      min={0}
      max={100}
      step={1}
      floatingLabel
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      renderLabel={renderLabel}
      renderNotch={renderNotch}
      onValueChanged={handleValueChange}
    />
  );
}

const styles = StyleSheet.create({
  slider: {
    width: "100%",
    height: 40,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 10,
  },
  rail: {
    flex: 1,
    height: 4,
    backgroundColor: "#ddd",
  },
  railSelected: {
    height: 4,
    backgroundColor: "red",
  },
  label: {
    backgroundColor: "black",
    padding: 4,
    borderRadius: 4,
  },
  notch: {
    width: 10,
    height: 10,
    backgroundColor: "gray",
  },
});
