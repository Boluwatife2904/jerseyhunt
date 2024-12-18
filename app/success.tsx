import { ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";

import CommonSuccessOrErrorState from "@/components/common/SuccessOrErrorState";
import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import CommonActionButtonsContainer from "@/components/common/ActionButtonsContainer";
import Button from "@/components/ui/Button";
import { CarIcon } from "@/constants/icons";

const Success = () => {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <CustomSafeAreaView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <CommonSuccessOrErrorState state="success" />
        </ScrollView>

        <CommonActionButtonsContainer gap={18}>
          <Button text="Continue Shopping" variant="secondary" onPress={() => router.replace("/home")} />
          <Button text="Track Order" icon={<CarIcon stroke={"#A8F37D"} />} onPress={() => router.replace("/home")} />
        </CommonActionButtonsContainer>
      </CustomSafeAreaView>
    </>
  );
};

export default Success;
