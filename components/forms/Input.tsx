import { View, TextInput, InputModeOptions, TouchableOpacity } from "react-native";

import { AddressIcon, ChatIcon, LockIcon, UserIcon, PersonIcon, EyeIcon, EyeSlashIcon } from "@/constants/icons";
import { useState } from "react";

type Props = {
    icon: "user" | "lock" | "chat" | "person" | "address";
    placeholder?: string;
    inputMode?: InputModeOptions;
};

const Input = ({ icon, placeholder, inputMode = "text" }: Props) => {
    const renderIcon = () => {
        if (icon === "user") return <UserIcon />;
        if (icon === "lock") return <LockIcon />;
        if (icon === "chat") return <ChatIcon />;
        if (icon === "person") return <PersonIcon />;
        if (icon === "address") return <AddressIcon />;
    };

    const [secureTextEntry, setSecureTextEntry] = useState(icon === "lock");

    return (
        <View>
            <View className="absolute top-[13px] left-5 h-10 w-10 flex items-start justify-center">{renderIcon()}</View>
            <TextInput
                className="min-h-[70px] border border-primary-main text-[16px] font-grotesk_medium py-[22px] rounded-[42px] pl-[60px] pr-14"
                placeholder={placeholder}
                inputMode={inputMode}
                placeholderTextColor="#9C9C9C"
                secureTextEntry={secureTextEntry}
            />
            {icon === "lock" && (
                <TouchableOpacity className="absolute top-6 bg-white right-6" onPress={() => setSecureTextEntry(!secureTextEntry)}>
                    {secureTextEntry ? <EyeSlashIcon /> : <EyeIcon />}
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Input;
