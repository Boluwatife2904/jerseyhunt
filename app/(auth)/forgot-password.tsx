import { Text, View, Platform, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import AuthHeader from "@/components/common/AuthHeader";
import Input from "@/components/forms/Input";
import Button from "@/components/ui/Button";

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
                    ...Platform.select({ android: { paddingBottom: 16 } }),
                }}>
                <Input placeholder="Enter phone number" icon="user" inputMode="numeric" />
                <View style={{ gap: 40 }}>
                    <Button text="Submit" />
                    <View style={{ gap: 4 }} className="flex-wrap flex-row items-center justify-center">
                        <Text className="font-grotesk text-white-500 text-sm">Remember your password?</Text>
                        <Link href="/login" className="text-primary-main font-grotesk_medium text-base">
                            Login
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
};

export default ForgotPasswordScreen;
