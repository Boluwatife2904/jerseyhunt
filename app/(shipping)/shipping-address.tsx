import { ScrollView, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import PageTitle from "@/components/common/PageTitle";
import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import ShippingTypeOrAddress from "@/components/Shipping/TypeOrAddress";
import Checkbox from "@/components/forms/Checkbox";
import Button from "@/components/ui/Button";
import CommonActionButtonsContainer from "@/components/common/ActionButtonsContainer";

import { LocationIcon } from "@/constants/icons";

const addresses = [
    { id: "1", name: "Home", address: "58 Allen Avenue Allen Avenue, Lagos,Nigeria" },
    { id: "2", name: "Office", address: "Suite 212 Lozumba Complex Area 10, Lagos,Nigeria" },
    { id: "3", name: "Parent's House", address: "60 Adeoyo Street Ilasa, Lagos,Nigeria" },
    { id: "4", name: "Friend's House", address: "261 Ijegun Road Major Bus Stop, Lagos,Nigeria" },
];

const ShippingAddress = () => {
    const [selected, setSelected] = useState("1");

    return (
        <>
            <CustomSafeAreaView>
                <PageTitle title="Shipping Address" />
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

                <CommonActionButtonsContainer gap={10}>
                    <Button text="Add New Shipping Address" variant="white" />
                    <Button text="Apply" />
                </CommonActionButtonsContainer>
            </CustomSafeAreaView>
        </>
    );
};

export default ShippingAddress;
