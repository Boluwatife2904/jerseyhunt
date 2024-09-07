import { ScrollView, TouchableOpacity, View } from "react-native";
import { useRouter, Stack } from "expo-router";
import { useState } from "react";

import PageTitle from "@/components/common/PageTitle";
import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import ShippingTypeOrAddress from "@/components/Shipping/TypeOrAddress";
import { LocationIcon } from "@/constants/icons";
import Checkbox from "@/components/forms/Checkbox";
import Button from "@/components/ui/Button";

const addresses = [
    { id: "1", name: "Home", address: "58 Allen Avenue Allen Avenue, Lagos,Nigeria" },
    { id: "2", name: "Office", address: "Suite 212 Lozumba Complex Area 10, Lagos,Nigeria" },
    { id: "3", name: "Parent's House", address: "60 Adeoyo Street Ilasa, Lagos,Nigeria" },
    { id: "4", name: "Friend's House", address: "261 Ijegun Road Major Bus Stop, Lagos,Nigeria" },
];

const ShippingAddress = () => {
    const router = useRouter();

    const [selected, setSelected] = useState("1");

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <CustomSafeAreaView>
                <PageTitle title="Shipping Address" onPress={router.back} />
                <ScrollView className="px-6" contentContainerStyle={{ flexGrow: 1, marginTop: 40.48, gap: 18 }}>
                    {addresses.map((address, index) => (
                        <TouchableOpacity key={index} onPress={() => setSelected(address.id)}>
                            <ShippingTypeOrAddress
                                icon={<LocationIcon />}
                                title={address.name}
                                body={address.address}
                                bordered={index !== addresses.length - 1}
                                right={<Checkbox checked={selected === address.id} />}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={{ gap: 18 }} className="absolute bottom-0 left-0 w-full px-6 pb-7 pt-4">
                    <Button text="Add New Shipping Address" variant="white" />
                    <Button text="Apply" />
                </View>
            </CustomSafeAreaView>
        </>
    );
};

export default ShippingAddress;
