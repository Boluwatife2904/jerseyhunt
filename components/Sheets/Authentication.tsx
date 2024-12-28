import { View, Text } from "react-native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { useRouter } from "expo-router";

import Button from "../ui/Button";
import { GoogleIcon } from "@/constants/icons";

const AuthenticationSheet = () => {
  const router = useRouter();

  return (
    <ActionSheet gestureEnabled containerStyle={{ paddingTop: 14, borderTopLeftRadius: 25, borderTopRightRadius: 25 }} indicatorStyle={{ width: 50.45, backgroundColor: "#B3B3B3" }}>
      <View style={{ gap: 28 }} className="pb-10 px-6 pt-4">
        <Button
          text="Create an account"
          onPress={() => {
            SheetManager.hide("authentication-sheet");
            router.push("/register");
          }}
        />
        <Button
          text="Login to account"
          variant="secondary"
          onPress={() => {
            SheetManager.hide("authentication-sheet");
            router.push("/login");
          }}
        />
        <View style={{ gap: 6 }} className="flex-row items-center">
          <View className="flex-1 h-[1px] bg-[#00000033]" />
          <Text className="text-[#00000033] font-grotesk_medium text-sm text-center">or</Text>
          <View className="flex-1 h-[1px] bg-[#00000033]" />
        </View>
        <Button text="Continue with Google" variant="white" icon={<GoogleIcon />} />
      </View>
    </ActionSheet>
  );
};

export default AuthenticationSheet;
