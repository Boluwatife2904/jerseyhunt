import { View, Text, Pressable } from "react-native";

import { CaretLeftIcon } from "@/constants/icons";
import BackButton from "./BackButton";

type Props = {
  title: string;
  content: string;
  onPress?: () => void;
};

const AuthHeader = ({ title, content, onPress }: Props) => {
  return (
    <View className="px-5 mb-7 pt-[14px]">
      <BackButton onPress={onPress} />
      <View className="mt-8">
        <Text className="text-[#0C0C08] font-grotesk_semibold text-2xl mb-2">{title}</Text>
        <Text className="text-black-100 text-sm font-grotesk">{content}</Text>
      </View>
    </View>
  );
};

export default AuthHeader;
