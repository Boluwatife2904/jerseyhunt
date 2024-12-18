import { View, Text } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import Button from "../ui/Button";
import { GoogleIcon } from "@/constants/icons";

const AuthenticationSheet = () => {
  return (
    <ActionSheet
      gestureEnabled
      containerStyle={{ paddingTop: 14, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}
      indicatorStyle={{ width: 50.45, backgroundColor: "#B3B3B3" }}>
      <View style={{ gap: 28 }} className="pb-10 px-6 pt-4">
        <Button text="Create an account" />
        <Button text="Login to account" variant="secondary" />
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
