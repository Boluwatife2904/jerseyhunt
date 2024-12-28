import { View, Dimensions, Image, type ImageURISource } from "react-native";
import React from "react";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";

interface OnboardingItemProps {
  source: ImageURISource;
  index: number;
  scrollX: SharedValue<number>;
}

const OnboardingItem = ({ source, index, scrollX }: OnboardingItemProps) => {
  const { width } = Dimensions.get("screen");

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(scrollX.value, [(index - 1) * width, index * width, (index + 1) * width], [-width * 0.25, 0, width * 0.25], Extrapolation.CLAMP),
        },
        {
          scale: interpolate(scrollX.value, [(index - 1) * width, index * width, (index + 1) * width], [0.9, 1, 0.9], Extrapolation.CLAMP),
        },
        {
          rotate: String(interpolate(scrollX.value, [(index - 1) * width, index * width, (index + 1) * width], [2, 0, -2], Extrapolation.CLAMP)) + "deg",
        },
      ],
      opacity: interpolate(scrollX.value, [(index - 1) * width, index * width, (index + 1) * width], [0.3, 1, 0.3], Extrapolation.CLAMP),
    };
  });

  return (
    <Animated.View style={[{ width }, animatedStyle]} className="items-center justify-center  overflow-hidden">
      <Image source={source} style={{ height: 392.54, width: width * 0.7 }} className="rounded-[36.69px]" resizeMethod="auto" resizeMode="cover" />
    </Animated.View>
  );
};

export default OnboardingItem;
