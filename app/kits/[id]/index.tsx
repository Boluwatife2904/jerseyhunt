import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import KitsSelectQuantity from "@/components/Kits/SelectQuantity";
import KitsSelectSize from "@/components/Kits/SelectSize";
import KitsImagesPreview from "@/components/Kits/ImagesPreview";

import { kits } from "@/constants/data";
import { CartIcon, EditIcon, StarIcon } from "@/constants/icons";
import Button from "@/components/ui/Button";

const TITLE_CLASSES = "text-2xl font-grotesk_semibold text-[#121111] !leading-8";

const JerseyScreen = () => {
    const params = useLocalSearchParams();

    const kit = kits.find((item) => item.id === params.id);

    const [form, setForm] = useState({ quantity: 1, size: "l" });
    const updateFormData = (name: string, value: string | number) => setForm({ ...form, [name]: value });

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <CustomSafeAreaView>
                <ScrollView
                    className="px-6 relative"
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom: 160,
                    }}
                    showsVerticalScrollIndicator={false}>
                    <KitsImagesPreview images={kit?.images} />
                    <View className="mb-1.5 flex-row items-start justify-between">
                        <View className="flex-col">
                            <Text className={TITLE_CLASSES}>{kit?.name}</Text>
                            <Text className={TITLE_CLASSES}>{kit?.year}</Text>
                        </View>
                        <KitsSelectQuantity max={10} />
                    </View>
                    <View style={{ gap: 8 }} className="mb-1.5 flex-row items-center pb-1.5 border-b-[1.15px] border-[#f6f6f6]">
                        <Text className="font-grotesk_medium text-lg text-[#292526]">{kit?.amount}</Text>
                        <View style={{ gap: 10.96 }} className="flex-row items-end">
                            <StarIcon />
                            <Text className="font-grotesk_light text-xs">
                                <Text className="text-[#787676]">{kit?.rating}</Text>
                                <Text className="text-primary-500"> (7.932 reviews)</Text>
                            </Text>
                        </View>
                    </View>
                    <KitsSelectSize size={form.size} setSize={($event) => updateFormData("size", $event)} />
                </ScrollView>
                <View style={{ gap: 8 }} className="px-6 absolute left-0 w-full bottom-0 bg-white pt-3">
                    <Button variant="secondary" text="Customize" icon={<EditIcon />} />
                    <Button icon={<CartIcon />} text="Add to Cart" />
                </View>
            </CustomSafeAreaView>
        </>
    );
};

export default JerseyScreen;
