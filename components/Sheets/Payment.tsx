import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import Input from "../forms/Input";
import Button from "../ui/Button";
import PaymentMethod from "../Checkout/PaymentMethod";

const PaymentSheet = () => {
  const router = useRouter();

  const overview = [
    { title: "Total (9 items)", value: "₦ 39,000.00" },
    { title: "Shipping Fee", value: "₦ 1,500.00" },
    { title: "Discount", value: "₦ 00.00" },
    { title: "Total ", value: "₦ 40,500.00" },
  ];

  const viewPaymentMethods = () => {
    SheetManager.hide("payment-sheet");
    router.push("/payment-methods");
  };

  const confirmPayment = () => {
    SheetManager.hide("payment-sheet");
    router.push("/success");
  };

  return (
    <ActionSheet
      gestureEnabled
      containerStyle={{
        paddingTop: 14,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
      indicatorStyle={{ width: 50.45, backgroundColor: "#B3B3B3" }}>
      <View style={{ gap: 28 }} className="px-6 pt-3">
        <Input placeholder="Discount code" icon="discount" />

        <PaymentMethod onPress={viewPaymentMethods} />

        <View style={{ gap: 18 }}>
          {overview.map((data, index) => {
            return (
              <View style={{ gap: 18 }} key={index}>
                {index === 3 && <View className="h-[1px] bg-[#E6E6E6]" />}
                <View style={{ gap: 10 }} className="flex-row justify-between">
                  <Text className="font-grotesk text-base">{data.title}</Text>
                  <Text className="font-grotesk_semibold text-base text-[#171516]">{data.value}</Text>
                </View>
              </View>
            );
          })}
        </View>

        <View className="justify-center items-center">
          <Text className="font-grotesk_light leading-4 text-xs text-[#A1A1A1]">By placing an order you agree to our</Text>
          <TouchableOpacity>
            <Text className="font-grotesk_light leading-4 text-xs text-primary-main">Terms And Conditions.</Text>
          </TouchableOpacity>
        </View>

        <Button text="Confirm Payment" onPress={confirmPayment} />
      </View>
    </ActionSheet>
  );
};

export default PaymentSheet;
