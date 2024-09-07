import { View, Text, Image } from "react-native";
import { Kit } from "@/types/Kits";

const TITLE_CLASSES = "font-grotesk_semibold text-base leading-6";

interface IShoppingListItem {
    id: string;
    size: string;
    quantity: string;
    kit: Kit;
}

type Props = {
    item: IShoppingListItem;
};

const ShoppingListItem = ({ item }: Props) => {
    return (
        <View style={{ gap: 18 }} className="flex-row items-center">
            <Image source={item.kit.images.preview} className="w-[130px] h-[133px] rounded-[12.79px]" resizeMode="cover" />
            <View>
                <Text className={TITLE_CLASSES}>{item.kit.name}</Text>
                <Text className={TITLE_CLASSES}>{item.kit.year} </Text>
                <Text className="font-grotesk_light text-[#787676] text-[10px] mt-1 mb-3">Size: {item.size}</Text>
                <Text className="text-sm font-grotesk_semibold text-[#0c0c09]">{item.kit.amount}</Text>
            </View>
        </View>
    );
};

export default ShoppingListItem;
