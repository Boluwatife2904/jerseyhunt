import { SafeAreaView } from "react-native-safe-area-context";
import { PropsWithChildren } from "react";
import { Platform, KeyboardAvoidingView } from "react-native";

const CustomSafeAreaView = ({ children, ...rest }: PropsWithChildren) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} {...rest}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1"
        keyboardVerticalOffset={10}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
