import { View, Text, ImageURISource, Image } from "react-native";
import React from "react";

type State = "success" | "error";

type Props = {
    state: State;
};

const stateMappings: Record<State, { image: ImageURISource; heading: string; body: string }> = {
    error: {
        image: require("@/assets/images/error.gif"),
        heading: "Oh Snap!",
        body: "Looks like something went wrong while processing your request",
    },
    success: {
        image: require("@/assets/images/success.gif"),
        heading: "Congrats! Your Order has been placed",
        body: "Your items has been placed and is on it’s way to being processed",
    },
};

const SuccessOrErrorState = ({ state }: Props) => {
    return (
        <View style={{ gap: 18 }} className="items-center justify-center">
            <Image source={stateMappings[state].image} resizeMode="contain" className="w-full max-w-[300px] max-h-[300px] block mx-auto" />
            <Text className="font-grotesk_semibold text-2xl text-center max-w-[293px] mx-auto">{stateMappings[state]?.heading ?? ""}</Text>
            <Text className="text-white-400 text-center text-lg font-grotesk_medium max-w-[345px] mx-auto">{stateMappings[state]?.body ?? ""}</Text>
        </View>
    );
};

export default SuccessOrErrorState;
