import { PropsWithChildren } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ButtonVariant = "primary" | "secondary" | "white";

type Props = {
  text?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  icon?: any;
  onPress?: () => void;
};

const Button = ({ text, variant = "primary", disabled = false, icon, onPress, children }: Props & PropsWithChildren) => {
  const buttonVariants: Record<ButtonVariant, { body: string; text: string }> = {
    primary: {
      body: disabled ? "bg-white border-[0.5px] border-[#0000001a]" : "bg-primary-main",
      text: disabled ? "text-[#0C0C08]" : "text-secondary-main",
    },
    secondary: {
      body: disabled ? "bg-white border-[0.5px] border-[#0000001a]" : "bg-secondary-main",
      text: disabled ? "text-[#0C0C08]" : "text-primary-main",
    },
    white: {
      body: disabled ? "bg-white border-[0.5px] border-[#0000001a]" : "bg-white",
      text: disabled ? "text-[#0C0C08]" : "text-[#0c0c08]",
    },
  };

  return (
    <TouchableOpacity disabled={disabled} className={`min-h-[70px] w-full flex-row items-center justify-center rounded-[100px] shadow ${buttonVariants[variant].body}`} onPress={onPress}>
      <View style={{ gap: 8 }} className="flex-row items-end">
        {icon}
        <Text className={`font-grotesk_medium text-xl pb-[1px] !leading-[0px] ${buttonVariants[variant].text}`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
