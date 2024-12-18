import { Kit } from "@/types/Kits";
import { View, Text, ScrollView, FlatList } from "react-native";
import KitItem from "@/components/Kits/Item";

type Props = {
  title: string;
  itemsPerRow?: number;
  kits: Kit[];
};

const KitsView = (props: Props) => {
  const { title, kits, itemsPerRow = 3 } = props;

  return (
    <View style={{ gap: 18 }}>
      <Text className="text-black text-lf font-grotesk_medium">{title}</Text>
      <View style={{ gap: 16 }}>
        {Array.from({ length: Math.ceil(kits.length / itemsPerRow) }).map((_, index) => (
          <ScrollView key={index} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 16 }}>
            {kits.slice(index * itemsPerRow, (index + 1) * itemsPerRow).map((kit) => (
              <KitItem kit={kit} key={kit.id} />
            ))}
          </ScrollView>
        ))}
      </View>
    </View>
  );
};

export default KitsView;
