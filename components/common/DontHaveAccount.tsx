import { View, Text } from "react-native";
import { Link } from "expo-router";

const DontHaveAccount = () => {
    return (
        <View style={{ gap: 4 }} className="flex-row flex-wrap items-center justify-center">
            <Text className="font-grotesk text-white-500 text-sm">Don't have an account with us?</Text>
            <Link href="/register" className="text-primary-main font-grotesk_medium text-base">
                Create an account
            </Link>
        </View>
    );
};

export default DontHaveAccount;
