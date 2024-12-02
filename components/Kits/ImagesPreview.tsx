import { View, TouchableOpacity, Image, ImageURISource, useWindowDimensions } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import { CaretLeftIcon, HeartIcon } from "@/constants/icons";

type Props = {
    images: Record<string, ImageURISource>;
};

const ImagesPreview = ({ images }: Props) => {
    const router = useRouter();
    const { height } = useWindowDimensions();

    const [image, setImage] = useState(images.preview);

    return (
        <View style={{ gap: 12, marginBottom: 12 }}>
            <View className="rounded-[18.75px] overflow-hidden relative">
                <TouchableOpacity
                    className="h-[43.52px] w-[43.52px] rounded-full bg-white shadow absolute top-[18.35px] left-[18.35px] items-center justify-center z-[1]"
                    onPress={() => router.back()}>
                    <CaretLeftIcon />
                </TouchableOpacity>
                <Image source={image} className="max-w-full object-top origin-top bg-top" resizeMode="cover" style={{ height: height * 0.45 }} />
                <TouchableOpacity className="absolute top-[18.35px] right-[18.35px] h-[45.87px] w-[45.87px] rounded-full items-center justify-center bg-white shadow">
                    <HeartIcon />
                </TouchableOpacity>
            </View>
            <View style={{ gap: 17 }} className="items-center justify-center flex-row">
                {Object.values(images).map((image, index) => (
                    <TouchableOpacity key={index} onPress={() => setImage(image)}>
                        <Image source={image} className="h-12 w-12 shrink-0 rounded-full" resizeMode="cover" />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default ImagesPreview;
