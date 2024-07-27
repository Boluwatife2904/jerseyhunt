import { View, TextInput, InputModeOptions } from "react-native";

import { LockIcon, UserIcon } from "@/constants/icons";
import { useState } from "react";

type Props = {
    icon: "user" | "lock";
    placeholder?: string;
    inputMode?: InputModeOptions;
};

const Input = ({ icon, placeholder, inputMode = "text" }: Props) => {
    const renderIcon = () => {
        if (icon === "user") return <UserIcon />;
        if (icon === "lock") return <LockIcon />;
    };

    const [secureTextEntry, setSecureTextEntry] = useState(icon === "lock");

    return (
        <View>
            <View className="absolute top-[15px] left-5 h-10 w-10 flex items-center justify-center">{renderIcon()}</View>
            <TextInput
                className="min-h-[70px] border border-primary-main text-[16px]  font-grotesk_medium py-[22px] rounded-[42px] pl-[60px]"
                placeholder={placeholder}
                inputMode={inputMode}
                placeholderTextColor="#9C9C9C"
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

export default Input;
