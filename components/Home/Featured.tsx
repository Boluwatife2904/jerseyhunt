import { Kit } from "@/types/Kits";
import { View, Text, Image } from "react-native";

type Props = {
  kit: Kit;
};

const FeaturedKit = (props: Props) => {
  const { kit } = props;

  return (
    <View className="w-full h-[381px] relative rounded-[20px] overflow-hidden border-[0.55px] border-[#0000001A]">
      <Image source={kit.images.preview} className="w-full h-full" resizeMode="cover" />
      <View style={{ gap: 6 }} className="absolute bottom-9 px-7">
        <Text className="underline text-sm font-grotesk_medium text-primary-main">New in</Text>
        <Text className="text-primary-main font-grotesk_semibold text-[22px] leading-[30px] max-w-[195px]">{kit.name}</Text>
        <Text className="text-base font-grotesk_bold text-primary-main">{kit.amount}</Text>
        <View style={{ gap: 4.15, marginTop: 2 }} className="flex-row">
          {Array.from({ length: 3 }).map((_, index) => (
            <View key={index} className={`h-[8.31px] rounded-[5.19px] ${index === 0 ? "bg-primary-main w-[24.93px]" : "bg-secondary-main w-[8.31px]"}`} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default FeaturedKit;
