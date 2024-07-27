import { Text, TouchableOpacity, Pressable, Platform } from "react-native";

type Props = {
    text: string;
    variant?: "primary";
    disabled?: boolean;
    onPress?: () => void;
};

const Button = ({ text, variant = "primary", disabled = false, onPress }: Props) => {
    const buttonVariants: Record<string, { body: string; text: string }> = {
        primary: {
            body: disabled ? "bg-white border-[0.5px] border-[#0000001a]" : "bg-primary-main",
            text: disabled ? "text-[#0C0C08]" : "text-secondary-main",
        },
    };

    return (
        <TouchableOpacity
            disabled={disabled}
            className={`min-h-[70px] w-full items-center justify-center rounded-[100px] shadow ${buttonVariants[variant].body}`}
            onPress={onPress}>
            <Text className={`font-grotesk_medium text-xl ${buttonVariants[variant].text}`}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
