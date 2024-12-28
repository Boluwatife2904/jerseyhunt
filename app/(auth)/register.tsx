import { Text, ScrollView, View, Platform, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import { Link, useRouter } from "expo-router";

import OTPTextInput from "react-native-otp-textinput";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import AuthHeader from "@/components/common/AuthHeader";
import Input from "@/components/forms/Input";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/forms/Checkbox";
import { TickChecked, TickUnchecked } from "@/constants/icons";

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
  const [timer, setTimer] = useState(25);
  const timerInterval = useRef<NodeJS.Timeout>();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleBack = () => {
    if (step === "verify") router.push("/login");
    if (step === "otp") setStep("verify");
    if (step === "account") setStep("otp");
  };

  const clearTimer = () => {
    if (timerInterval.current) clearInterval(timerInterval.current);
  };

  const startTimer = () => {
    setTimer(25);
    timerInterval.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearTimer();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const handleContinue = () => {
    if (step === "verify") {
      setStep("otp");
      startTimer();
    } else if (step === "otp") setStep("account");
    else router.replace("/home");
  };

  return (
    <CustomSafeAreaView>
      <AuthHeader title={stepsMap[step].title} content={stepsMap[step]?.content ?? ""} onPress={handleBack} />
      <ScrollView
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          gap: 20,
          justifyContent: "space-between",
          ...Platform.select({
            android: { paddingBottom: 32 },
            ios: { paddingBottom: 12 },
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
            <View style={{ gap: 18 }}>
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
              <View>
                {timer > 0 ? (
                  <Text className="text-center text-white-500 text-sm font-grotesk">
                    Resend code in
                    <Text className="text-primary-main text-base"> 00:{String(timer).padStart(2, "0")}</Text>
                  </Text>
                ) : (
                  <TouchableOpacity onPress={startTimer}>
                    <Text className="font-grotesk_medium text-base text-primary-main text-center">Resend Code</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
          {/* CREATE ACCOUNT */}
          {step === "account" && (
            <>
              <Input placeholder="Enter full name" icon="person" />
              <Input placeholder="Enter email address" icon="chat" inputMode="email" />
              <Input placeholder="Enter home address" icon="address" />
              <Input placeholder="Enter password" icon="lock" />
              <Input placeholder="Enter password" icon="lock" />
              <TouchableOpacity style={{ gap: 8 }} className="flex-row items-start" activeOpacity={0.7} onPress={() => setAcceptedTerms(!acceptedTerms)}>
                {acceptedTerms ? <TickChecked /> : <TickUnchecked />}
                <Text className="font-grotesk_light text-[13.3px] leading-[18px] text-[#00000099] flex-row flex-wrap">
                  I agree to the processing of my personal information and the <Text className="font-grotesk text-primary-main">Terms & Conditions. </Text>
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <Button text={stepsMap[step].buttonText} disabled={!acceptedTerms && step === "account"} onPress={handleContinue} />
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default RegisterScreen;
