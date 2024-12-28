import { View, TouchableOpacity, Dimensions, Text } from "react-native";
import React from "react";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";

interface Props {
  index: number;
  scrollX: SharedValue<number>;
}

const OnboardingPagination = ({ index, scrollX }: Props) => {
  const { width } = Dimensions.get("screen");

  return (
    <View style={{ gap: 4.15 }} className="flex-row items-center justify-center">
      {[0, 1, 2].map((value) => {
        const animatedStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(scrollX.value, [(value - 1) * width, value * width, (value + 1) * width], [8.31, 24.31, 8.31], Extrapolation.CLAMP);
          return { width: dotWidth };
        });

        return <Animated.View key={value} style={animatedStyle} className={`h-[8.31px] rounded-full ${value === index ? "bg-primary-main" : "bg-secondary-main"}`} />;
      })}
    </View>
  );
};

export default OnboardingPagination;
