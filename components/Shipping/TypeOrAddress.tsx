import { ReactNode } from "react";
import { View, Text } from "react-native";

type Props = {
  icon?: ReactNode;
  title: string;
  body: string;
  bordered?: boolean;
  right?: ReactNode;
};

const TypeOrAddress = ({ title, body, icon, bordered = true, right }: Props) => {
  return (
    <View style={{ gap: 8 }} className={`flex-row ${bordered ? "pb-[18px] border-b border-[#e6e6e6]" : ""}`}>
      {icon}
      <View style={{ gap: 4 }}>
        <Text className="font-grotesk_semibold text-[#0c0c08] text-base">{title}</Text>
        <Text className="text-xs text-black-100 font-grotesk_light">{body}</Text>
      </View>
      <View className="self-center ml-auto text-black">{right}</View>
    </View>
  );
};

export default TypeOrAddress;
