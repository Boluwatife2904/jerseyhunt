import { ScrollView, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import PageTitle from "@/components/common/PageTitle";
import ShippingTypeOrAddress from "@/components/Shipping/TypeOrAddress";
import Button from "@/components/ui/Button";
import CommonActionButtonsContainer from "@/components/common/ActionButtonsContainer";

import { CarIcon, GiftIcon, SpinnerIcon } from "@/constants/icons";
import Checkbox from "@/components/forms/Checkbox";

const shippingTypes = [
    { id: "1", icon: <GiftIcon />, name: "Economy", description: "Estimated Arrival by 10th of June 2024" },
    { id: "2", icon: <SpinnerIcon />, name: "Regular", description: "Estimated Arrival by 8th of June 2024" },
    { id: "3", icon: <CarIcon />, name: "Cargo", description: "Estimated Arrival by 5th of June 2024" },
];

const ShippingType = () => {
    const [selected, setSelected] = useState("1");

    return (
        <>
            <CustomSafeAreaView>
                <PageTitle title="Shipping Type" />
                <ScrollView className="px-6" contentContainerStyle={{ flexGrow: 1, marginTop: 40, gap: 30 }}>
                    {shippingTypes.map((shippingType, index) => (
                        <TouchableOpacity key={index} onPress={() => setSelected(shippingType.id)}>
                            <ShippingTypeOrAddress
                                icon={shippingType.icon}
                                title={shippingType.name}
                                body={shippingType.description}
                                bordered={index !== shippingTypes.length - 1}
                                right={
                                    <View>
                                        <Checkbox checked={shippingType.id === selected} />
                                    </View>
                                }
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <CommonActionButtonsContainer>
                    <Button text="Apply" />
                </CommonActionButtonsContainer>
            </CustomSafeAreaView>
        </>
    );
};

export default ShippingType;
