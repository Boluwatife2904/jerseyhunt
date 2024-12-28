import { View, ScrollView, Text, Platform } from "react-native";
import { Link, useRouter } from "expo-router";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import AuthHeader from "@/components/common/AuthHeader";
import Input from "@/components/forms/Input";
import Button from "@/components/ui/Button";
import DontHaveAccount from "@/components/common/DontHaveAccount";

const LoginScreen = () => {
  const router = useRouter();

  return (
    <CustomSafeAreaView>
      <AuthHeader title="Log into your account" content="Welcome back to JerseyHunt, please enter your login details to access your account." />
      <ScrollView
        className="flex-"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
          paddingHorizontal: 24,
          gap: 20,
          ...Platform.select({
            android: { paddingBottom: 30 },
            ios: { paddingBottom: 16 },
          }),
        }}>
        <View style={{ gap: 18 }}>
          <Input icon="user" placeholder="Enter phone number" inputMode="tel" />
          <Input icon="lock" placeholder="Enter password" />
          <Link href="/forgot-password" className="w-fit ml-auto text-primary-main font-grotesk text-base text-right">
            Forgot password?
          </Link>
        </View>

        <View style={{ gap: 28 }}>
          <Button text="Login" disabled onPress={() => router.push("/home")} />
          <DontHaveAccount />
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;
