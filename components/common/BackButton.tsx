import { Pressable } from "react-native";
import React from "react";

import { CaretLeftIcon } from "@/constants/icons";

const BackButton = ({ onPress }: { onPress?: () => void }) => {
  return (
    <Pressable className="bg-white rounded-full border-[1.15px] border-secondary-main items-center justify-center h-12 w-12" hitSlop={20} onPress={onPress}>
      <CaretLeftIcon />
    </Pressable>
  );
};

export default BackButton;
