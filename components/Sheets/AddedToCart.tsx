import { View } from "react-native";
import { useRouter } from "expo-router";

import ActionSheet, { SheetManager } from "react-native-actions-sheet";

import Button from "../ui/Button";

const AddedToCartSheet = () => {
    const router = useRouter();

    const confirmAction = (goToCheckout: boolean) => {
        SheetManager.hide("added-to-cart-sheet");
        if (goToCheckout) router.push("/checkout");
    };

    return (
        <ActionSheet
            gestureEnabled
            containerStyle={{ paddingTop: 14, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}
            indicatorStyle={{ width: 50.45, backgroundColor: "#B3B3B3" }}>
            <View style={{ gap: 18 }} className="p-6 pb-7">
                <Button text="Continue Shopping" variant="secondary" onPress={() => confirmAction(false)} />
                <Button text="Proceed to Checkout" onPress={() => confirmAction(true)} />
            </View>
        </ActionSheet>
    );
};

export default AddedToCartSheet;
