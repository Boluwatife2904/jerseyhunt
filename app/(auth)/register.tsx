import { Text } from "react-native";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import AuthHeader from "@/components/common/AuthHeader";
import { useRouter } from "expo-router";

const LoginScreen = () => {
    const router = useRouter();

    return (
        <CustomSafeAreaView>
            <AuthHeader
                title="Enter your phone number"
                content="A 4-code OTP will be sent to your number to verify your account."
                onPress={() => router.push("/login")}
            />
            <Text>Register</Text>
        </CustomSafeAreaView>
    );
};

export default LoginScreen;
