import { ScrollView, Text, TouchableOpacity, View, Dimensions, ViewToken } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import React, { useEffect, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { useAnimatedScrollHandler, useDerivedValue, useSharedValue, scrollTo, useAnimatedRef } from "react-native-reanimated";

import Button from "@/components/ui/Button";
import BackButton from "@/components/common/BackButton";
import OnboardingItem from "@/components/Onboarding/Item";
import OnboardingPagination from "@/components/Onboarding/Pagination";

const STEPS_MAPS: Record<number, { text: string; image: string }> = {
  0: { text: "Your one-stop shop for authentic jerseys!", image: "" },
  1: { text: "Rep your team with pride!", image: "" },
  2: { text: "Authentic jerseys, hassle-free shopping!", image: "" },
};

const images = [require("@/assets/images/onboarding/1.jpeg"), require("@/assets/images/onboarding/2.jpeg"), require("@/assets/images/onboarding/3.jpeg")];

const { width } = Dimensions.get("screen");

export default function Index() {
  const [index, setIndex] = useState(0);
  const insets = useSafeAreaInsets();
  const scrollX = useSharedValue(0);
  const offset = useSharedValue(0);
  const flatlistRef = useAnimatedRef<Animated.FlatList<any>>();

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => (scrollX.value = event.contentOffset.x),
    // onMomentumEnd: (event) => (offset.value = event.contentOffset.x),
  });

  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
      setIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);

  const handleContinue = () => {
    if (index < 2) {
      setIndex((index) => (index += 1));
      flatlistRef.current?.scrollToIndex({
        animated: true,
        index: index + 1,
        viewPosition: 0.5,
      });
    } else SheetManager.show("authentication-sheet");
  };

  return (
    <ScrollView className="bg-white" contentContainerStyle={{ gap: 36, flexGrow: 1, paddingTop: insets.top + 14, paddingBottom: insets.bottom + 40 }}>
      <View className="flex-row px-6 justify-between items-center min-h-[48px]">
        {index !== 0 && (
          <BackButton
            onPress={() => {
              setIndex((index) => (index -= 1));
              flatlistRef.current?.scrollToIndex({
                animated: true,
                index: index - 1,
                viewPosition: 0.5,
              });
            }}
          />
        )}
        {index < 2 && (
          <TouchableOpacity
            className="ml-auto"
            onPress={() => {
              setIndex(3);
              flatlistRef.current?.scrollToIndex({
                animated: true,
                index: 2,
                viewPosition: 0.5,
              });
              SheetManager.show("authentication-sheet");
            }}>
            <Text className="text-right font-grotesk text-primary-main text-base">Skip</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={{ gap: 28 }}>
        <Animated.FlatList
          ref={flatlistRef}
          data={images}
          renderItem={({ item, index }) => {
            return <OnboardingItem source={item} index={index} scrollX={scrollX} />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          pagingEnabled={true}
          onScroll={onScrollHandler}
          viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        />
        <Text className="text-primary-main max-w-[406px] mx-auto font-grotesk_bold text-center text-[32px] leading-10 px-6">{STEPS_MAPS[index]?.text ?? ""}</Text>
        <OnboardingPagination index={index} scrollX={scrollX} />
      </View>

      <View className="mt-auto px-6">
        <Button onPress={handleContinue} text={index === 2 ? "Start Hunting" : "Next"} />
      </View>
    </ScrollView>
  );
}
