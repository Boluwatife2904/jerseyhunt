import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import PageTitle from "@/components/common/PageTitle";
import Button from "@/components/ui/Button";
import ShippingTypeOrAddress from "@/components/Shipping/TypeOrAddress";
import ShoppingList from "@/components/Checkout/ShoppingList";
import CommonActionButtonsContainer from "@/components/common/ActionButtonsContainer";

import { LocationIcon, GiftIcon, EditIcon } from "@/constants/icons";
import { SheetManager } from "react-native-actions-sheet";

const SHIPPING_TITLE = "text-lg font-grotesk_medium text-[#0c0c08]";

const CheckoutScreen = () => {
    const router = useRouter();

    return (
        <CustomSafeAreaView>
            <PageTitle title="Checkout" />
            <ScrollView
                contentContainerStyle={{ gap: 40, flexGrow: 1, marginTop: 28, paddingBottom: 160 }}
                className="px-6"
                showsVerticalScrollIndicator={false}>
                <View style={{ gap: 18 }} className="">
                    {/* SHIPPING ADDRESS */}
                    <Text className={SHIPPING_TITLE}>Shipping Address</Text>
                    <ShippingTypeOrAddress
                        icon={<LocationIcon />}
                        title="Home"
                        body="58 Allen Avenue Allen Avenue, Lagos,Nigeria"
                        right={
                            <TouchableOpacity onPress={() => router.push("/shipping-address")}>
                                <EditIcon stroke={"#0c0c08"} strokeWidth={1.5} />
                            </TouchableOpacity>
                        }
                    />
                    {/* SHIPPING TYPE */}
                    <Text className={SHIPPING_TITLE}>Shipping Type</Text>
                    <ShippingTypeOrAddress
                        icon={<GiftIcon />}
                        title="Economy"
                        body="Estimated Arrival by 10th of June 2024"
                        right={
                            <TouchableOpacity onPress={() => router.push("/shipping-type")}>
                                <EditIcon stroke={"#0c0c08"} strokeWidth={1.5} />
                            </TouchableOpacity>
                        }
                    />
                    {/* SHOPPING LIST */}
                    <ShoppingList />
                </View>
            </ScrollView>
            {/* CONTINUE TO PAYMENT */}
            <CommonActionButtonsContainer>
                <Button text="Continue To Payment" onPress={() => SheetManager.show("payment-sheet")} />
            </CommonActionButtonsContainer>
        </CustomSafeAreaView>
    );
};

export default CheckoutScreen;
