import { View, Text, Pressable } from "react-native";

import { CaretLeftIcon } from "@/constants/icons";

type Props = {
    title: string;
    content: string;
    onPress?: () => void;
};

const AuthHeader = ({ title, content, onPress }: Props) => {
    return (
        <View className="px-5 mb-7 pt-[14px]">
            <Pressable className="bg-white rounded-full border-[1.15px] border-secondary-main items-center justify-center h-12 w-12" onPress={onPress}>
                <CaretLeftIcon />
            </Pressable>
            <View className="mt-8">
                <Text className="text-[#0C0C08] font-grotesk_semibold text-2xl mb-2">{title}</Text>
                <Text className="text-black-100 text-sm font-grotesk">{content}</Text>
            </View>
        </View>
    );
};

export default AuthHeader;
