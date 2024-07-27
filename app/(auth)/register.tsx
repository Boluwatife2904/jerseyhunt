import { Text, ScrollView, View, Platform } from "react-native";
import { useState } from "react";
import { Link, useRouter } from "expo-router";

import OTPTextInput from "react-native-otp-textinput";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import AuthHeader from "@/components/common/AuthHeader";
import Input from "@/components/forms/Input";
import Button from "@/components/ui/Button";

const stepsMap = {
    verify: { title: "Enter your phone number", content: "A 4-code OTP will be sent to your number to verify your account.", buttonText: "Send code" },
    otp: { title: "Verify your Phone number", content: "Enter the 4-code OTP sent to $number. Please check your message app.", buttonText: "Confirm" },
    account: {
        title: "Account setup",
        content: "Complete your account setup to find the latest kits from your favorite clubs, all in one place.",
        buttonText: "Create account",
    },
};

const RegisterScreen = () => {
    const router = useRouter();

    const [step, setStep] = useState<"verify" | "otp" | "account">("verify");

    const handleBack = () => {
        if (step === "verify") router.push("/login");
        if (step === "otp") setStep("verify");
        if (step === "account") setStep("otp");
    };
    const handleContinue = () => {
        if (step === "verify") setStep("otp");
        if (step === "otp") setStep("account");
    };

    return (
        <CustomSafeAreaView>
            <AuthHeader title={stepsMap[step].title} content={stepsMap[step].content} onPress={handleBack} />
            <ScrollView
                className="px-5"
                contentContainerStyle={{
                    flexGrow: 1,
                    gap: 20,
                    justifyContent: "space-between",
                    ...Platform.select({
                        android: { paddingBottom: 16 },
                    }),
                }}>
                <View style={{ gap: 16 }}>
                    {/* VERIFY PHONE NUMBER */}
                    {step === "verify" && (
                        <>
                            <Input placeholder="Enter phone number" icon="user" inputMode="numeric" />
                            <View style={{ gap: 10 }} className="flex-row items-center justify-between flex-wrap">
                                <Text className="font-grotesk text-white-500 text-sm">Have an account with us?</Text>
                                <Link href="/login" className="text-primary-main font-grotesk_medium text-base">
                                    Log in
                                </Link>
                            </View>
                        </>
                    )}
                    {/* VERIFY OTP */}
                    {step === "otp" && (
                        <>
                            <View>
                                <OTPTextInput
                                    autoFocus
                                    offTintColor={"#A8F37D"}
                                    tintColor={"#A8F37D"}
                                    containerStyle={{}}
                                    textInputStyle={{
                                        borderRadius: 100,
                                        height: 80,
                                        width: 80,
                                        borderColor: "#A8F37D",
                                        borderStyle: "solid",
                                        borderWidth: 1,
                                        borderBottomWidth: 1,
                                        shadowColor: "none",
                                        backgroundColor: "white",
                                        fontSize: 25,
                                        fontFamily: "GroteskSemibold",
                                        color: "#0C0C08",
                                    }}
                                    placeholder="*"
                                    placeholderTextColor="#9C9C9C"
                                />
                            </View>
                        </>
                    )}
                    {/* CREATE ACCOUNT */}
                    {step === "account" && (
                        <>
                            <Input placeholder="Enter full name" icon="person" />
                            <Input placeholder="Enter email address" icon="chat" inputMode="email" />
                            <Input placeholder="Enter home address" icon="address" />
                            <Input placeholder="Enter password" icon="lock" />
                            <Input placeholder="Enter password" icon="lock" />
                        </>
                    )}
                </View>
                <Button text={stepsMap[step].buttonText} onPress={handleContinue} />
            </ScrollView>
        </CustomSafeAreaView>
    );
};

export default RegisterScreen;
