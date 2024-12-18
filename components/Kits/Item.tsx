import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { Kit } from "@/types/Kits";
import { PinIcon, StarIcon } from "@/constants/icons";

type Props = {
  kit: Kit;
};

const KitItem = (props: Props) => {
  const { kit } = props;

  const router = useRouter();

  const viewKit = () => router.push(`/kits/${kit.id}`);

  return (
    <TouchableOpacity onPress={viewKit}>
      <View style={{ width: "100%", height: 187, overflow: "hidden", borderRadius: 16, marginBottom: 9 }}>
        <Image source={kit.images.preview} style={{ resizeMode: "cover", width: "100%", height: "100%" }} />
        <TouchableOpacity className="absolute top-[10px] right-[10px] bg-secondary-main p-1 rounded-full">
          <PinIcon />
        </TouchableOpacity>
      </View>
      <View style={{ gap: 4, marginBottom: 12 }} className="min-w-[183px] shrink-0">
        <Text className="text-[#0C0C08] font-grotesk_semibold text-base leading-6">{kit.name}</Text>
        <Text className="text-[10px] font-grotesk_light text-[#787676]">{kit.year}</Text>
      </View>
      <View className="flex-row space-x-6 items-center">
        <Text className="text-sm text-[#0C0C08] font-grotesk_semibold">{kit.amount}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon />
          <Text className="text-xs text-[#0C0C08] font-grotesk_light">{kit.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default KitItem;
