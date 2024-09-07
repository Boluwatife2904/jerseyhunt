import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import PageTitle from "@/components/common/PageTitle";
import Button from "@/components/ui/Button";
import ShippingTypeOrAddress from "@/components/Shipping/TypeOrAddress";
import ShoppingList from "@/components/Checkout/ShoppingList";

import { LocationIcon, GiftIcon, EditIcon } from "@/constants/icons";

const SHIPPING_TITLE = "text-lg font-grotesk_medium text-[#0c0c08]";

const CheckoutScreen = () => {
    const router = useRouter();

    return (
        <CustomSafeAreaView>
            <PageTitle title="Checkout" onPress={router.back} />
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
                        right={<EditIcon stroke={"#0c0c08"} strokeWidth={1.5} />}
                    />
                    {/* SHIPPING TYPE */}
                    <Text className={SHIPPING_TITLE}>Shipping Type</Text>
                    <ShippingTypeOrAddress
                        icon={<GiftIcon />}
                        title="Economy"
                        body="Estimated Arrival by 10th of June 2024"
                        right={<EditIcon stroke={"#0c0c08"} strokeWidth={1.5} />}
                    />
                    {/* SHOPPING LIST */}
                    <ShoppingList />
                </View>
            </ScrollView>
            {/* CONTINUE TO PAYMENT */}
            <View className="px-6 absolute bottom-0 left-0 w-full bg-white pt-4 pb-7">
                <Button text="Continue To Payment" />
            </View>
        </CustomSafeAreaView>
    );
};

export default CheckoutScreen;
