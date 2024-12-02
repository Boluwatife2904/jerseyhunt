import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CaretRightIcon, MastercardIcon } from "@/constants/icons";

interface Props {
  label?: string;
  onPress: () => void;
}

const PaymentMethod = (props: Props) => {
  const { label = "Payment method", onPress } = props;

  return (
    <View style={{ gap: 18 }}>
      <Text className="font-grotesk_medium text-lg text-[#0C0C08]">{label}</Text>
      <TouchableOpacity
        className="bg-[#DBFACA] py-[18px] px-[26px] rounded-full flex-row items-center justify-between"
        onPress={onPress}>
        <View className="flex-row gap-3 items-center">
          <MastercardIcon />
          <Text className="font-grotesk_semibold text-base text-[#0C0C08]">⁕⁕⁕⁕ ⁕⁕⁕⁕ ⁕⁕⁕⁕ 2143</Text>
        </View>
        <CaretRightIcon />
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethod;
