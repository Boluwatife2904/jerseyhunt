import { Text, View, Platform, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import AuthHeader from "@/components/common/AuthHeader";
import Input from "@/components/forms/Input";
import Button from "@/components/ui/Button";
import DontHaveAccount from "@/components/common/DontHaveAccount";

const ForgotPasswordScreen = () => {
    const router = useRouter();

    return (
        <CustomSafeAreaView>
            <AuthHeader
                title="Forgot Password"
                content="Welcome back to JerseyHunt, please enter your phone number to reset your password."
                onPress={() => router.back()}
            />
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    gap: 20,
                    justifyContent: "space-between",
                    paddingHorizontal: 24,
                    ...Platform.select({ android: { paddingBottom: 32 }, ios: { paddingBottom: 16 } }),
                }}>
                <Input placeholder="Enter phone number" icon="user" inputMode="numeric" />
                <View style={{ gap: 28 }}>
                    <Button text="Submit" />
                    <DontHaveAccount />
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
};

export default ForgotPasswordScreen;
