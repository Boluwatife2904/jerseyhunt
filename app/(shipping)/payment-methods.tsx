import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";

import PaymentMethod from "@/components/Checkout/PaymentMethod";
import PageTitle from "@/components/common/PageTitle";
import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";

import { MobileIcon, GoogleIcon } from "@/constants/icons";
import Checkbox from "@/components/forms/Checkbox";
import { SheetManager } from "react-native-actions-sheet";

const paymentMethods = [
  { key: "bank", title: "Bank Transfer ", icon: <MobileIcon /> },
  { key: "google_pay", title: "Google Pay", icon: <GoogleIcon /> },
];

const PaymentMethodsScreen = () => {
  const [activeMethod, setActiveMethod] = useState("");

  return (
    <CustomSafeAreaView>
      <PageTitle title="Payment Method" />

      <View style={{ gap: 28 }} className="px-5 pt-10">
        <PaymentMethod label="Credit & Debit Card" onPress={() => SheetManager.show("credit-debit-cards-sheet")} />

        <View style={{ gap: 18 }}>
          <Text className="font-grotesk_medium text-[#0C0C08] text-lg">More Payment Options</Text>
          {paymentMethods.map((method, index) => (
            <TouchableOpacity
              key={index}
              className={`${index !== paymentMethods.length - 1 ? "pb-[18px] border-b border-[#E6E6E6]" : ""} flex-row justify-between items-center`}
              activeOpacity={0.55}
              onPress={() => setActiveMethod(method.key)}>
              <View style={{ gap: 8 }} className="flex-row items-center">
                {method.icon}
                <Text className="font-grotesk text-base text-[#2B2B2B]">{method.title}</Text>
              </View>
              <Checkbox checked={activeMethod === method.key} color="#9C9C9C" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default PaymentMethodsScreen;
