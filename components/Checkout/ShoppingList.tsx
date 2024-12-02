import { View, Text } from "react-native";
import { kits } from "@/constants/data";

import ShoppingListItem from "./ShoppingListItem";
import { Kit } from "@/types/Kits";

const shoppingList = [
  { id: "1", size: "L", quantity: "1", kit_id: "1" },
  { id: "2", size: "XL", quantity: "2", kit_id: "3" },
  { id: "3", size: "XL", quantity: "2", kit_id: "2" },
].map((list) => {
  const kit = kits.find((kit) => kit.id === list.kit_id) as Kit;
  return { ...list, kit };
});

const ShoppingList = () => {
  return (
    <View style={{ gap: 18 }}>
      <Text className="text-black text-lg font-grotesk_medium">Shopping List</Text>
      {shoppingList.map((item, index) => (
        <ShoppingListItem key={index} item={item} />
      ))}
    </View>
  );
};

export default ShoppingList;
