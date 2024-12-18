import { View, Text } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

import { MinusIcon, PlusIcon } from "@/constants/icons";

const BUTTON_CLASSES = "border-[1.15px] rounded-full h-[36.69px] w-[36.69px] items-center justify-center border-[rgba(168_243_125)]";

type Props = {
  max: number;
};

const SelectQuantity = (props: Props) => {
  const { max = 5 } = props;

  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((oldQuantity) => (oldQuantity === 1 ? oldQuantity : (oldQuantity -= 1)));
  };

  const increaseQuantity = () => {
    setQuantity((oldQuantity) => (oldQuantity === max ? oldQuantity : (oldQuantity += 1)));
  };

  return (
    <View style={{ gap: 13.76 }} className="flex-row items-center">
      <TouchableOpacity className={BUTTON_CLASSES} disabled={quantity === 1} onPress={decreaseQuantity}>
        <MinusIcon />
      </TouchableOpacity>
      <Text className="text-lg font-grotesk_medium text-[#0c0c08]">{quantity}</Text>
      <TouchableOpacity className={BUTTON_CLASSES} disabled={quantity === max} onPress={increaseQuantity}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
};

export default SelectQuantity;
