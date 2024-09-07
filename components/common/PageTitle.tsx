import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { CaretLeftIcon } from "@/constants/icons";

type Props = {
    title?: string;
};

const PageTitle = ({ title }: Props) => {
    const router = useRouter();

    return (
        <View className="items-center flex-row pt-[18px] px-6 justify-center relative min-h-[44px]">
            <TouchableOpacity
                className="bg-white rounded-full border-[1.15px] border-secondary-main items-center justify-center h-12 w-12 absolute top-[18px] left-6"
                onPress={router.back}>
                <CaretLeftIcon />
            </TouchableOpacity>
            <Text className="text-[#0c0c08] font-grotesk_medium text-lg py-[9.76px]">{title}</Text>
        </View>
    );
};

export default PageTitle;
