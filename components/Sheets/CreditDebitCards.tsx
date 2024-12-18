import { MastercardIcon, PlusIcon } from "@/constants/icons";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import ActionSheet from "react-native-actions-sheet";

const cards = [
  { expiryDate: "06/27", cardHolder: "Olawunmi White", image: require("@/assets/images/card-designs/1.png") },
  { expiryDate: "06/27", cardHolder: "Olawunmi White", image: require("@/assets/images/card-designs/2.png") },
  { expiryDate: "06/27", cardHolder: "Olawunmi White", image: require("@/assets/images/card-designs/3.png") },
];

const CreditDebitCards = () => {
  return (
    <ActionSheet gestureEnabled containerStyle={{ paddingTop: 14, borderTopLeftRadius: 25, borderTopRightRadius: 25 }} indicatorStyle={{ width: 50.45, backgroundColor: "#B3B3B3" }}>
      <View style={{ gap: 28 }} className="py-[29px] px-6">
        <Text className="text-center font-grotesk_medium text-lg">Credit & Debit Card </Text>
        <View style={{ gap: 19 }}>
          <View className="min-h-[280px]">
            {cards.map((card, index) => (
              <ImageBackground key={index} source={card.image} style={{ top: index * 24 }} className={`rounded-[20px] overflow-hidden absolute w-full`}>
                <TouchableOpacity className="py-[35px] px-[26px]" activeOpacity={0.9}>
                  <View style={{ gap: 10 }} className="mb-[26px] flex-row items-center justify-between">
                    <Text className="text-white font-grotesk text-[22px]">ZeePay</Text>
                    <MastercardIcon />
                  </View>
                  <Text className="font-grotesk text-[28px] text-white mb-[35px]">⁕⁕⁕⁕ ⁕⁕⁕⁕ ⁕⁕⁕⁕ 2143</Text>
                  <View className="flex-row justify-between">
                    <View style={{ gap: 4 }}>
                      <Text className="font-grotesk_light text-sm text-white">Card Holder</Text>
                      <Text className="font-grotesk_medium text-white">{card.cardHolder}</Text>
                    </View>
                    <View style={{ gap: 4 }}>
                      <Text className="font-grotesk_light text-sm text-white">Expiry Date</Text>
                      <Text className="font-grotesk_medium text-white">{card.expiryDate}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            ))}
          </View>
          <TouchableOpacity
            style={{
              gap: 8,
              shadowColor: "#2925261A",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.51,
              shadowRadius: 13.16,
            }}
            activeOpacity={0.6}
            className="bg-white rounded-[20px] h-[230px] items-center justify-center">
            <PlusIcon height={27.52} width={27.52} color="#06432D" />
            <Text className="text-lg font-grotesk_medium text-center text-primary-main">Add Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
};

export default CreditDebitCards;
