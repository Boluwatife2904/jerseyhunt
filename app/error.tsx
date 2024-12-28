import { ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import React from "react";

import CommonSuccessOrErrorState from "@/components/common/SuccessOrErrorState";
import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import CommonActionButtonsContainer from "@/components/common/ActionButtonsContainer";
import Button from "@/components/ui/Button";

import { Home1Icon } from "@/constants/icons";

const Success = () => {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <CustomSafeAreaView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <CommonSuccessOrErrorState state="error" />
        </ScrollView>

        <CommonActionButtonsContainer gap={18}>
          <Button text="Try Again" variant="secondary" onPress={() => router.replace("/success")} />
          <Button text="Go Home" icon={<Home1Icon />} onPress={() => router.replace("/home")} />
        </CommonActionButtonsContainer>
      </CustomSafeAreaView>
    </>
  );
};

export default Success;
